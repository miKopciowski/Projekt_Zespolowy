import React, { useState } from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import Select from 'react-select';

import { Navbar, Container, Nav, NavDropdown, Row, Col   } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


const axios = require('axios');
  

const restauracje = [
    { label: "Mc Donalds", value: 1 },
    { label: "KFC", value: 2 },
    { label: "Burger King", value: 3 },
  ];


const produkt = [
    
    { label: "Burgery", value: "burgery" },
    { label: "Desery", value: "desery" },
    { label: "Dodatki", value: "dodatki" },
    
    { label: "Kurczak", value: "kurczak" },
    { label: "Napoje", value: "napoje" },
    { label: "Sałatki", value: "salatki" },
    
    { label: "Wrapy", value: "wrapy" },
    { label: "Zestawy", value: "zestawy" },
]  



function Home() {


    const [ktoraRestauracja, setKtoraRestauracja] = useState("aaa");
    const [ktoryProdukt, setKtoryProdukt] = useState("aaa");
    const [stanDanych, setStanDanych] = useState(0);

    
    const [tablicaWylosowane, setTablicaWylosowane] = useState([])
    

    
    const wyslijRzeczy = data => {
        let obiektDoWyslania = {
         "restauracja": ktoraRestauracja,
         "produkt": ktoryProdukt
        };
        console.log(obiektDoWyslania)
        axios.post("http://127.0.0.1:3500/restauracja", obiektDoWyslania)
       .then((dane) => {
        console.log(dane.data[0])
        setStanDanych(prevState => prevState + 1)
        setTablicaWylosowane(prevArray => [...prevArray, dane.data[0]])

        // restauracjaDane = dane.data[0].restauracja;

        console.log(tablicaWylosowane)

        // setKtoraRestauracjaDane(prevState => prevState + dane.data[0].restauracja);

        if(dane.data === "udalosiezapisac"){
            console.log("POPRAWNE ZAPISANIE")
        }
     })

     
     
 };


        return (
            <div className='mainColor'>

                {
                    stanDanych < 1 &&
                    <div>
                                <Navbar collapseOnSelect expand="lg" variant="dark">
                                                    <Container>
                                                    <Navbar.Brand href="/">Przychodnia<strong>PRO</strong></Navbar.Brand>
                                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                    <Navbar.Collapse id="responsive-navbar-nav">
                                                        <Nav className="me-auto">
                                                        </Nav>
                                    
                                                        
                                                        <Nav>
                                                        <Nav.Link href="/logowanie" >Restauracje</Nav.Link>
                                                        </Nav>
                                                        
                                                        <Nav>
                                                        <Nav.Link href="/logowanie" >O nas</Nav.Link>
                                                        </Nav>
                                    
                                                    </Navbar.Collapse>
                                                    </Container>
                                </Navbar>
                    
                                <div className="Hero">
                                    <div className="HeroElements">
                                    
                                        <div>
                                            <Select
                                                options={ restauracje } 
                                                className="reactSelect" 
                                                onChange={e => setKtoraRestauracja(e.value)}
                                            />
                                            <p><br></br></p>
                                            <Select
                                                options={ produkt } 
                                                className="reactSelect" 
                                                onChange={e => setKtoryProdukt(e.value)}
                                            />                                    
                                        <button className='ZalogujButton1' onClick={() => wyslijRzeczy(1)}>
                                            Zapisz się na wizytę
                                        </button>
                                        </div> 
                                    </div>
                                </div>
                    </div>

                }

                {
                    stanDanych > 0 &&
                    <div>
                        <Navbar collapseOnSelect expand="lg" variant="dark">
                            <Container>
                            <Navbar.Brand href="/">Przychodnia<strong>PRO</strong></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
            
                                
                                <Nav>
                                <Nav.Link href="/logowanie" >Restauracje</Nav.Link>
                                </Nav>
                                
                                <Nav>
                                <Nav.Link href="/logowanie" >O nas</Nav.Link>
                                </Nav>
            
                            </Navbar.Collapse>
                            </Container>
                        </Navbar>
                                    
                            <div className="Hero">
                            <div className="HeroElements">

                                {console.log(tablicaWylosowane[0].restauracja)}

                                <h1>{tablicaWylosowane[0].nazwa}</h1>
                                
                                <h2>{tablicaWylosowane[0].restauracja}</h2>

                                <h3>{tablicaWylosowane[0].cena}</h3>

                            </div>
                                            
                                            
                                    
                    </div>
                </div>
                }
            </div>
        );

    } 
   
 
  


export default Home;
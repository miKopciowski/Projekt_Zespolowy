import React, { useState } from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import Select from 'react-select';

import { Navbar, Container, Nav, NavDropdown, Row, Col   } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
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

const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#222", color:"#fff"}),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: "#222",
        color: "#fff",
        borderColor: "#222",
        borderBottom: '1px dotted white',
      };
    },
    singleValue: (styles, { isDisabled }) => {
        return {
          ...styles,
          color: "#fff"
        };
      },
  };
  


function Home() {

    const [ktoraRestauracja, setKtoraRestauracja] = useState("aaa");
    const [ktoryProdukt, setKtoryProdukt] = useState("aaa");
    const [cenaMin, setCenaMin] = useState("aaa");
    const [cenaMax, setCenaMax] = useState("aaa");
    const [stanDanych, setStanDanych] = useState(0);
    const [tablicaWylosowane, setTablicaWylosowane] = useState([])
    
    const wyslijRzeczy = data => {
        let obiektDoWyslania = {
         "restauracja": ktoraRestauracja,
         "produkt": ktoryProdukt,
         "cenaMin": cenaMin,
         "cenaMax": cenaMax
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
                    <Navbar className="right_aligned" bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                        <Navbar.Brand>
                            logo
                        </Navbar.Brand>
                        <Navbar.Collapse className="right_aligned" justifyContent="flex-end">
                            <Nav className="right_aligned">
                                <Nav.Link href="/" >Restauracje</Nav.Link>
                                <div className="leave_space"></div>
                                <Nav.Link href="/Onas" >O nas</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    
                    <div className="Hero">
                        <div className="HeroElements">
                        
                            <div>
                                <h1 className="Napis"> Wybierz swoją restaurację:</h1>
                                <Select
                                    options={ restauracje } 
                                    className="reactSelect"
                                    placeholder="Wpisz nazwę restauracji..."
                                    styles={colorStyles}
                                    onChange={e => setKtoraRestauracja(e.value)}
                                />
                                <p><br></br></p>
                                <Select
                                    options={ produkt } 
                                    className="reactSelect"
                                    placeholder="Kategoria produktu..."
                                    styles={colorStyles}
                                    onChange={e => setKtoryProdukt(e.value)}
                                />
                                <h2 className="Napis">Cena:</h2>    
                                
                                <form className="Formsen">
                                    <input type="number" min="0" value={cenaMin} className="Price" placeholder="Min" onChange={e => setCenaMin(e.target.value)}></input>
                                    -
                                    <input type="number" min="0" value={cenaMax} className="Price" placeholder="Max" onChange={e => setCenaMax(e.target.value)}></input>
                                </form>

                                <div  className="ButtonAligned">
                                    <button className="ZalogujButton1" onClick={() => wyslijRzeczy(1)}>
                                    Losuj
                                    </button>
                                </div>
                            
                            </div> 
                        </div>
                    </div>
                </div>
            }
            {
                stanDanych > 0 &&
                <div>
                    <Navbar className="right_aligned" bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                        <Navbar.Brand>
                            logo
                        </Navbar.Brand>
                        <Navbar.Collapse className="right_aligned" justifyContent="flex-end">
                            <Nav className="right_aligned">
                                <Nav.Link href="/" >Restauracje</Nav.Link>
                                <div className="leave_space"></div>
                                <Nav.Link href="/Onas" >O nas</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                                
                    <div className="Hero">
                        <div className="HeroElements">

                            {console.log(tablicaWylosowane[0].restauracja)}
                            <div className="box">
                                <h1 className="box_text_main">{tablicaWylosowane[0].nazwa}</h1>
                                {/* <h2 className="box_text_main">{tablicaWylosowane[0].restauracja}</h2> */}
                                <h3 className="box_text_main">cena: {tablicaWylosowane[0].cena} zł</h3>
                            </div>
                            <div className="ButtonAligned">
                                <Nav.Link href="/" >
                                    <button className="ZalogujButton1" type="button">
                                        Powrót
                                    </button>
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
} 

export default Home;
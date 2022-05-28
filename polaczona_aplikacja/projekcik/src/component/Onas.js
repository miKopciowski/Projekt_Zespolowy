import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import dude from './dude.png';

import { Navbar, Container, Nav, NavDropdown, Row, Col   } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// <link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//   integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//   crossorigin="anonymous"
// />



function Onas() {
    return (
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

            <h1 className="NapisOnas">O nas</h1>
            <div className="ButtonAligned">
                    <div class="member" display="inline">
                        <img src={dude} style={{width: 100, height: 100, borderRadius: 100/ 2}} className="leave_space2"/>
                        <div class="name">Mikołaj Kopciowski
                            <br />Lider</div>
                    </div>
                    <div class="member" display="inline">
                        <img src={dude} style={{width: 100, height: 100, borderRadius: 100/ 2}} className="leave_space2"/>
                        <div class="name">Wojciech Bilski
                            <br />Frontend</div>
                    </div>
                    <div class="member" display="inline">
                        <img src={dude} style={{width: 100, height: 100, borderRadius: 100/ 2}} className="leave_space2"/>
                        <div class="name">Michał Muciek
                            <br />Backend</div>
                    </div>
            </div>

            <p className="box_text_main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>
    );
}


export default Onas;
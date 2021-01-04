import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import logo from '../.././views/assets/logo.png'
import {Link} from 'react-router-dom'
export default function Menu() {
  return (
    <div>
      <Navbar bg="dark" className="justify-content-end" style={{height: "40px"}}>
      <Nav.Link href="#home"><Facebook color="light"/></Nav.Link>
      <Nav.Link href="#home"><Twitter color="light"/></Nav.Link>
      <Nav.Link href="#home"><Instagram color="light"/></Nav.Link>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><Image height="45" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link className="nav-link" to="/sobre">Sobre</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
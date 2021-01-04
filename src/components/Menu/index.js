import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import logo from '../.././views/assets/logo.png'

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
            <Nav.Link href="#home">Sobre</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <Nav.Link href="#link">Serviços</Nav.Link>
            <Nav.Link href="#link">Projetos</Nav.Link>
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
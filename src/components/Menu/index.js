import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Person } from 'react-bootstrap-icons';
import logo from '../.././views/assets/logo.png'
import {Link} from 'react-router-dom'
export default function Menu() {
  return (
    <Container fluid>
      <Navbar bg="dark" className="justify-content-end" style={{height: "40px"}}>
      <Nav.Link href="#home"><Facebook color="light"/></Nav.Link>
      <Nav.Link href="#home"><Twitter color="light"/></Nav.Link>
      <Nav.Link href="#home"><Instagram color="light"/></Nav.Link>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><Image height="45" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link className="nav-link" to="/Sobre">Sobre</Link>
            <Link className="nav-link" to="/Contato">Contato</Link>
            <Link className="nav-link" to="/Servicos">Serviços</Link>
            <Link className="nav-link" to="/Projeto">Projetos</Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title={<Person/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Meu Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Editar perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair da conta</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
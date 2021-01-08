import React from 'react';
import profile from './profile.png'

import { Card, Container, CardGroup } from "react-bootstrap";

export default function Perfil() {
    return (
        <Container fluid="md">
        <CardGroup>
        <Card>
            <Card.Body>
            <Card.Title>Nome</Card.Title>
            <Card.Img variant="top" src={profile}/>
            
                <Card.Subtitle className="mb-2 text-muted">Rio de Janeiro, 35 Anos</Card.Subtitle>
                <Card.Title>Sobre</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                <Card.Link href="#">Editar Perfil</Card.Link>
                <Card.Link href="#">Sair da Conta</Card.Link>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>



        <Card>
            <Card.Body>
            <Card.Title>Fodase?</Card.Title>           
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                <Card.Link href="#">Sim</Card.Link>
                <Card.Link href="#">Nao</Card.Link>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
        </CardGroup>
        </Container>
    )
}
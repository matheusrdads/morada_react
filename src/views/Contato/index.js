import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap'

export default function Contato() {
    return (
        <Container fluid="md mb-3 mt-3" >
            <h1>FALE CONOSCO</h1>
            
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastame">
                        <Form.Label>Sobreome</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="number" placeholder="Numero" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Digite sua Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
}

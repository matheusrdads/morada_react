import React from 'react'
import { Form, Button, Container} from 'react-bootstrap'


export default function Login() {
    return (
        <Container  className="mb-3">
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Digite seu email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Digite sua senha" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Container>
    )
}

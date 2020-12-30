import React from  'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

export default function Footer() {
    return(

<Container fluid className="page-footer font-small text-white" style={{backgroundColor: "rgb(71, 70, 70)"}}>

      <Container fluid className="bg-secondary">
  
        <Row className="py-4 d-flex align-items-center"></Row>
          <Col className="md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0">Conecte-se conosco nas redes sociais!</h6>
          </Col>

          <Col className="md-6 col-lg-7 text-center text-md-right">

            <a href="https://www.facebook.com/" className="fb-ic">
            <Facebook/>
              <i className="fab fa-facebook-f white-text mr-4"> </i>
            </a>
       
            <Twitter/>
            <a href="https://www.twitter.com/" className="tw-ic">
              <i className="fab fa-twitter white-text mr-4"> </i>
            </a>
            
            <Instagram/>
            <a href="https://www.instagram.com/" className="ins-ic">
              <i className="fab fa-instagram white-text"> </i>
            </a>
  
          </Col>
  
        </Container>

    
    <Container className="text-center text-md-left mt-5">
      <Row mt-3>

        <Col className="md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase font-weight-bold" style={{color: "#007bff"}}>Morada</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>Faça parte da morada</p>
  
        </Col>

        <Col className="md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase font-weight-bold" style={{color: "#007bff"}}>Endereço</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>Avenida Rio branco</p>
          <p>Sala 407, 4º andar</p>
          <p>Centro</p>
          <p>Rio de Janeiro - RJ</p>
  
        </Col>

        <Col className="md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 className="text-uppercase font-weight-bold" style={{color: "#007bff"}}>Redes sociais</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>
            <a href="#!" style={{color: "white"}}>Facebook</a>
          </p>
          <p>
            <a href="#!" style={{color: "white"}}>Twitter</a>
          </p>
          <p>
            <a href="#!" style={{color: "white"}}>Instagram</a>
          </p>
          <p>
            <a href="#!" style={{color: "white"}}>Linkedin</a>
          </p>
  
        </Col>

        <Col className="md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 className="text-uppercase font-weight-bold" style={{color: "#007bff"}}>Contato</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>
            <i className="fas fa-home mr-3"></i> Avenida Rio branco</p>
          <p>
            <i className="fas fa-envelope mr-3"></i> contato@morada.com</p>
          <p>
            <i className="fas fa-phone mr-3"></i> 21 9999-9999</p>
          <p>
            <i className="fas fa-print mr-3"></i> 21 2222 2222</p>
  
        </Col>
      </Row>
    </Container>

    <div className="footer-copyright text-center py-3">© 2020 Recode Pro:
  
    </div>
  </Container>

    )
}


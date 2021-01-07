import React from 'react';
import { Container, Row, Col, Button, Image, } from 'react-bootstrap'
import CeC from '../assets/CeC.JPG'
import projeto1 from '../assets/projetos/projeto1.jpg'
import projeto2 from '../assets/projetos/projeto2.jpg'
import projeto3 from '../assets/projetos/projeto3.jpg'
import Servicos from '../Servicos/'

export default function Home() {
    return (
        <Container fluid>
                        

        {/* sessão faça parte */}
            <div>
                <h2 className="display-2">Faça parte da Morada</h2>
                <p className="lead spacePar">Tá com aquela caixa de ferramenta parada em casa, ou algum resto de obra? É um prestador de serviços com um grande coração
                e muita vontade de ajudar o mundo a ser um lugar melhor? Sabia que alguém na sua rua pode estar só esperando por você pra tornar a casa em um verdadeiro lar?
                        Ofereça aqui na Morada! </p>
            </div>
            {/* sessão serviços */}
            <div>
                <a name="servicos" id="servicos"></a>
                <h2 className="display-2">Serviços que oferecemos:</h2>
                <p className="lead spacePar">Você poderá encontrar empréstimo de todo tipo de ferramentas, serviços gratuitos
                        e a preços populares.<br></br>
                        Comece escolhendo uma categoria:
                    </p>
            </div>

            <Servicos/>


            {/* sessão empresa amiga */}
            <Container fluid>
                <h3 className="display-4">PROJETOS</h3>
                <Row className="spacePar">
                    <Col>
                        <Image src={projeto1} className="imgEmpAmiga"/>
                        <p> Acrescentar evento</p>
                    </Col>


                    <Col>
                        <Image src={projeto2} className="imgEmpAmiga"/>
                        <p> Acrescentar evento</p>
                    </Col>


                    <Col>
                        <Image src={projeto3} className="imgEmpAmiga"/>
                        <p> Acrescentar evento</p>
                    </Col>

                </Row>
                <Button variant="secondary"> <a href="projetos.php">Conheça nossos projetos</a></Button>
            </Container>



            <Container style={{ marginTop: "70px" }}>
                <h3 className="display-4" style={{ marginBottom: "70px", marginTop: "70px" }} >EMPRESAS PARCEIRAS</h3>
                <Row>
                    <Col>
                        <Image src={CeC} style={{width: "150px"}}/>
                    </Col>


                    <Col>
                        <Image src={CeC} style={{width: "150px"}}/>
                    </Col>


                    <Col>
                        <Image src={CeC} style={{width: "150px"}}/>
                    </Col>

                </Row>
            </Container>


        </Container>
    );
}
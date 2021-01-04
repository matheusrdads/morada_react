import React from 'react';
import {Container, Col, Row,Image} from 'react-bootstrap'
import sobre1 from '../../views/assets/sobre/sobre1.jpg'
import sobre2 from '../../views/assets/sobre/sobre2.jpg'

 export default function Card1 () {
    return ( <Container fluid>
        <Row className="mt-5">
        <Col>
        <h2 className="display-2">Nossa Missão</h2>
        <p className="lead">Somos uma organização que visa desenvolver o desenvolvimento individual e coletivo de pessoas em situação insultentável de moradia. 
                Estamos dispostos a melhorar Nesse processo moradias em situação de risco, pequenos reparos em toda parte de uma residência sempre utilizando
                metodos construtivos que iram efetivamente reparar um proplema e mudar as condições de bem star dessas pessoas, realizando assim com eficiência e respeito
                obras rapidas e competentes com o máximo de supervisão que podemos oferecer e colhendo o feedback das pessoas assistidas, afim de manter uma melhora conínua.</p>
                </Col> <Image src={sobre1} className="img-fluid" />
        
        
    </Row>

<Row className="mt-5 mb-5">
<Image src={sobre2} className="img-fluid" />
<Col>

<h2 className="display-2">Nossos Valores</h2>
<p className="lead">Nossos valores e ideais são paltados no trabalho voluntário, onde o indivíduo se sensibiliza com a 
    causa do próximo e entra em movimento para prover uma mudança na realidade de seu próximo, seja com doações de materias,
    ferramentas, mão de obra e trasporte de materias.</p>
        </Col> 


</Row>
</Container>
    )
}

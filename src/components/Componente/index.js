import React from 'react';
import {Col, Row,Image} from 'react-bootstrap'
import construction from '../../views/assets/servicos/construction.png'
import conserto from '../../views/assets/servicos/conserto.png'
import {Link} from 'react-router-dom'

export default function Componente1 () {

    return (

            <Row className="row spacePar">
                <Col>
                <Link className="nav-link" to="/Componente_construcao"> <Image src={construction} style={{ width: "100px" }}/></Link>
                    <h3 className="display-5">CONSTRUÇÃO</h3>
                    <p>alvenaria, concretagem, revestimentos, carpintaria, etc.</p>
                </Col>

                <Col>
                <Link className="nav-link" to="/Componente_manutencao"> <Image src={conserto} style={{ width: "100px" }}/></Link>
                    <h3 display-5>MANUTENÇÃO</h3>
                    <p>instalação elétrica, reparos hidráulicos, pinturas, etc</p>

                </Col>
            </Row>
            )
}
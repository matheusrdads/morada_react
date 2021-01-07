import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Image} from 'react-bootstrap'

import reforma from '../../views/assets/servicos/reforma.jpg'
import profile from '../../views/assets/icones/profile-icon.png'


export default function Componente_manutencao () {
    return (

        <div><CardDeck>
    <Card>
    <Card.Img variant="top" src={reforma} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={reforma} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={reforma} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck className="mt-5">
<Card>
  <Image src={profile} roundedCircle style={{ width: "100px", height: "100px" }}/>

<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
<Card>
<Image src={profile} roundedCircle style={{ width: "100px", height: "100px" }}/>
<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This card has supporting text below as a natural lead-in to additional
    content.{' '}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
<Card>
<Image src={profile} roundedCircle style={{ width: "100px", height: "100px" }}/>
<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This card has even longer content than the first to
    show that equal height action.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
</CardDeck>


</div>
    )
}
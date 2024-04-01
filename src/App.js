import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  return (
   <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Checkpoint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='divPrincipal'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://madeinfoot.ouest-france.fr/photos/ligue-1/2023/zoom/l1-20231128220714-1258.jpg" />
      <Card.Body>
        <Card.Title>Mbappé</Card.Title>
        <Card.Text>
          Foot
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cloudfront-eu-central-1.images.arcpublishing.com/le360/ZFFW4HJA3ZFTXADRDB756226W4.jpg" />
      <Card.Body>
        <Card.Title>Maria Sharapova</Card.Title>
        <Card.Text>
          Tennis
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://phantom-marca.unidadeditorial.es/dd5352468b9f9cdfd6dc7163387a162c/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/17/16451255007747.jpg" />
      <Card.Body>
        <Card.Title>Jordan</Card.Title>
        <Card.Text>
          Student
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

   </div>
  );
}

export default App;

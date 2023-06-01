import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function NavMenu(){
    return( 
      <Navbar bg="danger" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home"><h1>Prototype 2.0</h1></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto"> 
            {/* me-auto */}
              <Nav.Link as={Link}to="/">Home</Nav.Link>
              <Nav.Link as={Link}to="/about">About</Nav.Link>
              <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}
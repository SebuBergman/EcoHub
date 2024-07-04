import "./navbar.scss";
import "../../app.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationBar() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EcoHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Learn" id="basic-nav-dropdown">
              <NavDropdown.Item href="/environmental-issues">Environmental Issues</NavDropdown.Item>
              <NavDropdown.Item href="/sustainable-living-tips">Sustainable Living Tips</NavDropdown.Item>
              <NavDropdown.Item href="#GreenInnovations">Green Innovations</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Watch" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Success Stories</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Quizzes & Challenges</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Discussion Forum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Downloads & Library</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Carbon Footprint Tool</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Engage">Engange</Nav.Link>
            <NavDropdown title="Engage" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">User Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Submit Your Story</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mission & Team</NavDropdown.Item>
              <NavDropdown.Item href="#action4">News & Updates</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
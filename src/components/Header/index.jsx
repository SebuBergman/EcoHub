import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import EcoHubLogo from "assets/images/Logo.png";

import "./style.scss";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="NavContainer">
        <Navbar.Brand>
          <img src={EcoHubLogo} alt="EcoHub Logo" className="ecohubLogoImg" />
          <a href="/" className="ecohubLogo">
            EcoHub
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Learn" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Environmental-issues">
                Environmental issues
              </NavDropdown.Item>
              <NavDropdown.Item href="/Sustainable-living-tips">
                Sustainable Living Tips
              </NavDropdown.Item>
              <NavDropdown.Item href="/Green-innovations">
                Green innovations
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Watch" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
              <NavDropdown.Item href="/success Stories">
                Success Stories
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interact" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/quizzes-&-Challenges">
                Quizzes & Challenges
              </NavDropdown.Item>
              <NavDropdown.Item href="/discussion-forum">
                Discussion-forum
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/downloads-&-library">
                Downloads & library
              </NavDropdown.Item>
              <NavDropdown.Item href="/carbon-footprint-tool">
                Environmental Impact Assessment
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Engage" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/user Profiles">
                User Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="/submit-your-story">
                Submit Your Story
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/mission-&-team">
                Mission & Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/news-&-updates">
                News & Updates
              </NavDropdown.Item>
              <NavDropdown.Item href="/press-&-Media">
                Press & Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

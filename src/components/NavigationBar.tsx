import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#/skills">
                Skills
              </Nav.Link>
              <Nav.Link href="/#/education">
                Education
              </Nav.Link>
              <Nav.Link href="/#/projects">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;

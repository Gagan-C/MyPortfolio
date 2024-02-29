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
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/GitHubPages_test.github.io/">Home</Nav.Link>
              <Nav.Link href="/GitHubPages_test.github.io/skills">
                Skills
              </Nav.Link>
              <Nav.Link href="/GitHubPages_test.github.io/education">
                Education
              </Nav.Link>
              <Nav.Link href="/GitHubPages_test.github.io/projects">
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

import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className="shadow">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">The Movies Portal</Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Trending</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/movies">Movies</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/series">TV series</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/search">Search</Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;

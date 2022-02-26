import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/navigations.css"

const Navigation = () => {
  return (
    <div>
      <Navbar  className="shadow nav-color">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/" className="navbar-brand">The Movies Portal</Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/" className="nav-link text-dark">Trending</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/movies" className="nav-link text-dark">Movies</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/series" className="nav-link text-dark">TV series</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/search" className="nav-link text-dark">Search</Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;

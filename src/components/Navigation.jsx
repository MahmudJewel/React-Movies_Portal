import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import "../assets/navigations.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="shadow nav-color">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              The Movies Portal
            </Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink activeClassName='active' to="/" className="nav-link text-dark">
                Trending
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName='active'
                to="/movies"
                className="nav-link text-dark"
                activeClassName="active"
              >
                Movies
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName='active'
                to="/series"
                className="nav-link text-dark"
                activeClassName="active"
              >
                TV series
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName='active' 
                to="/search" 
                className="nav-link text-dark"
                activeClassName="active">
                Search
              </NavLink>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;

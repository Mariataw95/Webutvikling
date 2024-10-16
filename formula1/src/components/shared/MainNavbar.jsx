import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// Navbar leading to different endpoints
const MainNavbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ms-5" href="#">
          <img
            src="./src/content/logo.png"
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <ul className="navbar-nav mx-auto ms-10">
          <li className="nav-item">
            <Link className="nav-link active fs-3 fw-bold" to="/">
              Home
            </Link>
          </li>

          <NavDropdown
            title="F1 Drivers"
            id="basic-nav-dropdown"
            className="fs-3 fw-italic"
          >
            <NavDropdown.Item
              as={Link}
              to="/drivers"
              className="fs-3 fw-italic"
            >
              View Drivers
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/add-driver"
              className="fs-3 fw-italic"
            >
              Register driver{" "}
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/edit-driver"
              className="fs-3 fw-italic"
            >
              Edit or delete driver
            </NavDropdown.Item>
          </NavDropdown>

          <li className="nav-item">
            <Link className="nav-link active fs-3 fw-bold" to="/teams">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active fs-3 fw-bold" to="/races">
              Races
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active fs-3 fw-bold" to="/quiz">
              Quiz Game
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavbar;

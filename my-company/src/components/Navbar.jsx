import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "#333",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/about">
        About
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/services">
        Services
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;

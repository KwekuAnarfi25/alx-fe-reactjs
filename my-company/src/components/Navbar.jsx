import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

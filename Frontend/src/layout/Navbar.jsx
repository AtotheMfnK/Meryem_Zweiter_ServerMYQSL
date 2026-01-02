import { Link } from "react-router-dom";
import "./navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/about" style={{ marginRight: 20 }}>About</Link>
      <Link to="/contact" style={{ marginRight: 20 }}>Kontakt</Link>
      <Link to="/card" style={{ marginRight: 20 }}>Card</Link>
       <Link to="/produkte">Produkte</Link>
    </nav>
  );
}

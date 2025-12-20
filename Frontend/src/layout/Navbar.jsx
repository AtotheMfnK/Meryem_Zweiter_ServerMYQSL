import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/about" style={{ marginRight: 20 }}>About</Link>
      <Link to="/contact" style={{ marginRight: 20 }}>Kontakt</Link>
      <Link to="/card">Card</Link>
    </nav>
  );
}

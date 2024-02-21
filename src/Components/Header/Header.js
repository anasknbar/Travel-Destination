import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
       
        <h1 className="logo">airGo</h1>
        <Link to="/home" className="home--css">Home</Link>
        
      </nav>
    </>
  );
}

export default Header;

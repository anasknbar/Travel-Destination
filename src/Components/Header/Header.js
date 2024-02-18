import "./Header.css";
import logo from "./Assets/flight.png";

function Header() {// use nav bar
  return (
    <>
      <div className="header-container">
        <img src={logo} alt=""></img>
        <h1>JourneyJet</h1>

        <span>
          <ul >
            <li className="header-list">Home</li>
            <li className="header-list">About Us </li>
            <li className="header-list">Contact</li>
            <li className="header-list"> </li>
          </ul>
          <input placeholder="Search"></input>
        </span>
      </div>
    </>
  );
}

export default Header;

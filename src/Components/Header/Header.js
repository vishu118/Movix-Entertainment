import "./Header.css";
import logo from "../IMAGES/movix-logo.png"

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <img src={logo} alt="" className="logo"/> Movix entertainment 
    </span>
  );
};

export default Header;

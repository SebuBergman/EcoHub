import Navbar from "./Navbar";
import "./navbar.scss";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div>
        <div className="ecohub-logo">
          <img src="Logo.png" alt="EcoHub Logo"/>
          <a href="/" className="logo">EcoHub</a>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default HeaderComponent;
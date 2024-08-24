import "./navbar.scss";
import "../../app.scss";
import { menuItems } from "./Links/Links";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menus">
        {menuItems.map((menuItem, index) =>{
          return (
            <li className="menu-items" key={index}>
              <a href={menuItem.link}>{menuItem.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

/*
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function NavigationBar() {
  function myUserMenu() {
    document.getElementById("userDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.userbtn')) {
      var dropdowns = document.getElementsByClassName("userMenu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">EcoHub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Learn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Learn
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/environmental-issues">Environmental Issues</a></li>
                  <li><a className="dropdown-item" href="/sustainable-living-tips">Sustainable Living Tips</a></li>
                  <li><a className="dropdown-item" href="/green-innovations">Green Innovations</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Watch" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Watch
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/videos">Videos</a></li>
                  <li><a className="dropdown-item" href="/success-stories">Success Stories</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Interact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Interact
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/quizzes&challenges">Quizzes & Challenges</a></li>
                  <li><a className="dropdown-item" href="/discussion-forum">Discussion Forum</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Resources" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/downloads&library">Downloads & Library</a></li>
                  <li><a className="dropdown-item" href="/carbon-footprint-tool">Carbon Footprint Tool</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Engage" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Engage
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/user-profiles">User Profiles</a></li>
                  <li><a className="dropdown-item" href="/submit-your-story">Submit Your Story</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#About" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/mission&team">Mission & Team</a></li>
                  <li><a className="dropdown-item" href="/news&updates">News & Updates</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="userMenu justify-content-end">
              <div id="logIn_Register">
                <a className="button_LogIn" href="/login">Log In</a>
              </div>
          </div>
        </div>
      </nav>
  );
}

export default NavigationBar;*/
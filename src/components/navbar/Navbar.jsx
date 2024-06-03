import "./navbar.scss";


function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Ecohub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Learn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Learn
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/environmental-issues">Environmental Issues</a></li>
                  <li><a className="dropdown-item" href="#">Sustainable Living Tips</a></li>
                  <li><a className="dropdown-item" href="#">Green Innovations</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Watch" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Watch
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Videos</a></li>
                  <li><a className="dropdown-item" href="#">Success Stories</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#Interact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Interact
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Quizzes & Challenges</a></li>
                  <li><a className="dropdown-item" href="#">Discussion Forum</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Downloads & Library</a></li>
                  <li><a className="dropdown-item" href="#">Carbot Footprint Tool</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Engage
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">User Profiles</a></li>
                  <li><a className="dropdown-item" href="#">Submit Your Story</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mission & Team</a></li>
                  <li><a className="dropdown-item" href="#">News and Updates</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
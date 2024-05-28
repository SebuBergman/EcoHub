import "./navbar.scss";

function Navbar() {
  return (
      <div className="navbar">
        <div className="wrapper">
          <div>
          <span>BergmanWebWorks</span>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/sebu.bersman/" target="_blank"><img src="/Instagram.webp" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/sebastian-bergman-01061679/" target="_blank"><img src="/LinkedIn.webp" alt="LinkedIn logo" /></a>
            <a href="https://github.com/SebuBergman" target="_blank"><img src="/github-mark-white.png" alt="Github logo" /></a>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
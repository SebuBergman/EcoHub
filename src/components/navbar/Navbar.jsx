import "./navbar.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import ToggleButton from "./sidebar/toggleButton/ToggleButton";
import { menuItems } from "./Links/Links";
import MenuItems from "./NavItems/MenuItems";

const drawerWidth = 240;
const navItems = ["Home", "Expertise", "Tech", "Projects", "Contact"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const toggleNavbarVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisibleNavbar(true);
    } else if (scrolled <= 800) {
      setVisibleNavbar(false);
    }
  };

  window.addEventListener("scroll", toggleNavbarVisible);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const sidebar = (
    <div
      className="sidebar"
      animate={mobileOpen ? "open" : "closed"}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <div className="bg">
        <ul className="menus">
          {menuItems.map((menuItem, index) =>{
            return (
              <MenuItems items={menuItem} key={index} />
            )
          })}
        </ul>
      </div>
      {/*<ToggleButton />*/}
    </div>
  );

  return (
    <div>
      <div component="nav" className="navbar">
        <div className={visibleNavbar ? "navbar_scrolling" : "navbar_headings"}>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon className="navbar_menuIcon" />
            </IconButton>
          </div>
          <div className="navbar_links">
            <Box
              className="main-nav"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block" } }}
            >
              <ul className="menus">
                {menuItems.map((menuItem, index) =>{
                  return (
                    <MenuItems items={menuItem} key={index} />
                  )
                })}
              </ul>
            </Box>
          </div>
        </div>
      </div>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {sidebar}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;

/*
import "./navbar.scss";
import "../../app.scss";
import { menuItems } from "./Links/Links";
import MenuItems from "./NavItems/MenuItems";


function Navbar() {
  return (
    <nav className="main-nav">
      <ul className="menus">
        {menuItems.map((menuItem, index) =>{
          return (
            <MenuItems items={menuItem} key={index} />
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;*/
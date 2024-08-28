import Dropdown from "./Dropdown";
import { useState, useRef, useEffect } from "react";
import "../navbar.scss";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)){
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  },[dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className={`menu-items ${dropdown ? "show" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
        <button
          className="menu-items-button"
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdown?"true":"false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          {items.title} {" "}
        </button>
        <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ):(
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
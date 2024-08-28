import "../navbar.scss";

const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li className="menu-items" key={index}>
          <a href={submenu.link}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
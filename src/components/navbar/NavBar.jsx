import "./NavBar.css";

function NavBar() {
 
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#home">
            <i className="icon fa-solid fa-house active"></i>
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="icon fa-solid fa-user-large"></i>
          </a>
        </li>
        <li>
          <a href="#skills">
            <i className="icon fa-solid fa-chart-simple"></i>
          </a>
        </li>
        <li>
          <a href="#study">
            <i className="icon fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="icon fa-solid fa-at"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

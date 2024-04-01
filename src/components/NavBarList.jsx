function NavBarList({ children }) {
  return (
    <ul className="navbar-list">
      <li>
        <a href="#features">features</a>
      </li>
      <li>
        <a href="#extentions">extentions</a>
      </li>
      <li>
        <a href="#contact">contact</a>
      </li>
      {children}
    </ul>
  );
}

export default NavBarList;

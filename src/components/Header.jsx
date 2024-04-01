import Logo from "./Logo";
import NavBarList from "./NavBarList";
import Button from "./Button";
import { useRef, useState } from "react";
import DropMenu from "./DropMenu";
import { List, X } from "@phosphor-icons/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const logo = useRef(null);
  const navbar = useRef(null);

  function handleToggle() {
    setIsOpen((open) => !open);

    logo.current.classList.toggle("change-color");
    navbar.current.classList.toggle("change-color");
  }

  return (
    <header className="main-header">
      <div className="container">
        <Logo logoRef={logo} />

        <nav className="navbar" ref={navbar}>
          {isOpen ? (
            <X onClick={handleToggle} weight="bold" />
          ) : (
            <List onClick={handleToggle} weight="bold" />
          )}

          {isOpen && <DropMenu />}

          {/* for large devices */}
          <div className="larg-device">
            <NavBarList />
            <Button href="#">login</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

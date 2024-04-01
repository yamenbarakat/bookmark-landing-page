import Logo from "./Logo";
import NavBarList from "./NavBarList";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <Logo />
        <nav>
          <NavBarList />
        </nav>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;

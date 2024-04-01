import Button from "./Button";
import NavBarList from "./NavBarList";
import SocialIcons from "./SocialIcons";

function DropMenu() {
  return (
    <div className="drop-menu">
      <div className="container">
        <NavBarList>
          <li>
            <Button>login</Button>
          </li>
        </NavBarList>

        <SocialIcons />
      </div>
    </div>
  );
}

export default DropMenu;

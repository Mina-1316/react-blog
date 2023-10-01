import { FunctionalComponent } from "npm:preact@10.17.1";

interface NavBarProps {}

const NavBar: FunctionalComponent<NavBarProps> = ({}) => {
  return (
    <nav>
      <div id="search" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

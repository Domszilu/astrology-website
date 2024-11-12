import { Link } from "react-router-dom";
import { NavbarContainer, Logo, Nav } from "./styles/Navbar.styles";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <div>
          <BurgerMenu />
          <Logo to="/">AstroDomi</Logo>
        </div>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-chart">Create Chart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledDropdown } from "./styles/Navbar.styles";

function BurgerMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <button
        id="toggle-menu"
        type="button"
        className={`toggle-menu ${isMenuOpened ? "is-opened" : ""}`}
        aria-labelledby="toggle-menuLabel"
        onClick={toggleMenu}
      >
        <span className="toggle-menu__line">
          <span id="toggle-menuLabel" style={{ display: "none" }}>
            Menu Button
          </span>
        </span>
      </button>

      <StyledDropdown isMenuOpened={isMenuOpened}>
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
      </StyledDropdown>
    </>
  );
}

export default BurgerMenu;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.section`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.8rem;
  }

  .toggle-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 6px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #333333;
  }

  .toggle-menu__line,
  .toggle-menu::before,
  .toggle-menu::after {
    content: "";
    width: 25px;
    height: 1.8px;
    background-color: #ffffff;
    transition: transform 0.5s linear, opacity 0.5s linear;
  }

  .toggle-menu.is-opened .toggle-menu__line {
    opacity: 0;
  }

  .toggle-menu.is-opened::before {
    transform: translateY(8px) rotate(45deg);
  }

  .toggle-menu.is-opened::after {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  color: #3c3744;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  li {
    list-style-type: none;
    margin: 3px 15px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #3c3744;
    &:hover {
      color: #3c3744;
    }
  }
`;

export const StyledDropdown = styled.div`
  width: 40rem;
  position: absolute;
  top: 100px;
  left: ${(props) => (props.isMenuOpened ? "0" : "-300px")};
  width: 300px;
  background-color: white;
  transition: left 0.5s ease-in-out;

  ul {
    width: 100%;

    li {
      list-style: none;
      border-bottom: 1px solid black;
      padding-bottom: 1.5rem;
      margin: 1.5rem 2rem;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-family: "Jost", sans-serif;
      font-weight: 500;
      font-size: 17px;
      color: #3c3744;
      &:hover {
        color: #3c3744;
      }
    }
  }
`;

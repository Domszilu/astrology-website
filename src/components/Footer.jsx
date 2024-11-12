import { StyledFooter } from "./styles/Footer.styles";

function Footer() {
  return (
    <StyledFooter>
      {/* <StyledFooterImage src="src/assets/black-crescent-moon.png" /> */}
      <p>AstroDomi © 2024</p>
      <p className="sadface">
        By using this website you accept the fact it's far from ready :(
      </p>
    </StyledFooter>
  );
}

export default Footer;

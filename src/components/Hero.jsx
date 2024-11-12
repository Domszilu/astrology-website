import { useNavigate } from "react-router";
import { BigStyledButton } from "./styles/Button.styles";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledMainContainer,
  StyledRightContainer,
} from "./styles/Hero.styles";

function Hero() {
  const navigate = useNavigate(); // note to self -> always all React hooks at the top level of the function otherwise they won't work!

  const handleRedirect = () => {
    navigate("/create-chart");
  };
  return (
    <>
      <StyledMainContainer>
        <StyledContainer>
          {/* LEFT SIDE */}
          <StyledLeftContainer>
            <h1>Unlock the deeper layers of your Self </h1>
            <p>
              Get to know yourself through the science of astrology. Explore
              your birth chart to uncover insights into your personality,
              emotional nature, strengths and challenges. Begin your journey of
              self-awareness.
            </p>
            <BigStyledButton onClick={handleRedirect}>
              Take the plunge
            </BigStyledButton>
          </StyledLeftContainer>
          {/* RIGHT SIDE */}
          <StyledRightContainer>
            <img src="Copernicanuniverse.jpg" alt="" />
          </StyledRightContainer>
        </StyledContainer>
      </StyledMainContainer>
    </>
  );
}

export default Hero;

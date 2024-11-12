import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useZodiacSigns } from "../hooks/useZodiacSign";
import {
  StyledContent,
  StyledPageContainer,
} from "../components/styles/Wrapper.styles";
import {
  ResultContainer,
  ResultWrapperStyled,
} from "../components/styles/Result.styles";
import { useAspects } from "../hooks/useAspects";

function Result() {
  const { isLoading, signs } = useZodiacSigns();
  const { aspects } = useAspects();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(signs);

  return (
    <>
      <StyledPageContainer>
        <Navbar />
        <StyledContent>
          <ResultWrapperStyled>
            <ResultContainer>
              <h2>Planets</h2>
              <div className="description-container">
                <p className="description-text">
                  In Western astrology the Planets represent core aspects of the
                  human psyche. The Signs give life, colour and shape to these
                  parts.
                </p>
              </div>
              <div className="columns">
                {signs.map((signData, index) => (
                  <p key={index}>
                    <img src={signData.icon} alt={signData.planet} />
                    {signData.planet} in{" "}
                    <span className="sign-span">{signData.sign}</span>
                  </p>
                ))}
              </div>
              <h2>Aspects</h2>
              <div className="description-container">
                <p className="description-text">
                  In Western astrology the Aspects shed light on the deeper
                  layers of the human psyche
                </p>
              </div>
              <div className="columns">{aspects}</div>
            </ResultContainer>
            <img className="img-alchemist" src="the-alchemist.jpg" alt="" />
          </ResultWrapperStyled>
        </StyledContent>
        <Footer />
      </StyledPageContainer>
    </>
  );
}

export default Result;

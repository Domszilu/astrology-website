import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Hero from "./../components/Hero";
import {
  StyledPageContainer,
  StyledContent,
} from "./../components/styles/Wrapper.styles";

function Home() {
  return (
    <StyledPageContainer>
      <Navbar />
      <StyledContent>
        <Hero />
      </StyledContent>
      <Footer />
    </StyledPageContainer>
  );
}

export default Home;

import BirthDataForm from "./../components/BirthDataForm";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import {
  StyledContent,
  StyledPageContainerBeige,
} from "./../components/styles/Wrapper.styles";
import { ImageContainer } from "./../components/styles/BirthDataForm.styles";

function CreateChart() {
  return (
    <StyledPageContainerBeige>
      <Navbar />
      <StyledContent>
        <ImageContainer>
          <img src="medieval-sun-no-bg.png" alt="" />
        </ImageContainer>
        <BirthDataForm />
      </StyledContent>
      <Footer />
    </StyledPageContainerBeige>
  );
}

export default CreateChart;

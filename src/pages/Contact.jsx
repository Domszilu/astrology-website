import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StyledButton } from "../components/styles/Button.styles";
import { StyledForm } from "../components/styles/Form.styles";
import {
  StyledContent,
  StyledPageContainer,
} from "../components/styles/Wrapper.styles";

function Contact() {
  return (
    <StyledPageContainer>
      <Navbar />
      <StyledContent>
        <StyledForm>
          <h2>Contact me</h2>
          <p>
            In ase of any enquries, please fill in the form below. Feel free to
            send me any questions, ideas, technical issues. Anything!{" "}
          </p>
          <section>
            <label for="name">
              <span>Name:</span>
            </label>
            <input id="name" name="name" autoComplete="off" />
          </section>

          <section>
            <label for="email">
              <span>Email:</span>
            </label>
            <input id="email" name="email" autocomplete="off" />
          </section>

          <section>
            <label htmlFor="">
              <span>Message:</span>
            </label>
            <textarea id="message" name="message" rows="8"></textarea>
          </section>

          <StyledButton>Send</StyledButton>
        </StyledForm>
      </StyledContent>
      <Footer />
    </StyledPageContainer>
  );
}

export default Contact;

import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 50rem;
  border-radius: 4px;
  padding: 1rem;

  input,
  textarea {
    border: none;
    border-bottom: 1px solid #bbb;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  textarea {
    background-color: #f1eee9;
  }

  section {
    padding: 1px, 2px, 4.5px;
    margin-bottom: 25px;
    display: flex;
  }

  label {
    margin-right: 25px;
  }

  h2,
  p {
    margin-bottom: 25px;
  }

  p {
    color: #666;
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  button {
    width: 100%;
  }
`;

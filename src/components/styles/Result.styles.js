import styled from "styled-components";

export const ResultWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .img-alchemist {
    width: 22%;
    border-radius: 4px;
    position: relative;
    bottom: 4rem;
  }
`;

export const ResultContainer = styled.div`
  padding: 1.5rem;
  width: 57rem;
  position: relative;

  h2 {
    font-family: "Jost", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 5rem 0 0.5rem;
    padding-left: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #c0c0c0;
  }

  p {
    padding: 0.7rem;
    .sign-span {
      color: #666;
    }

    .orbit {
      color: #295f98;
    }

    img {
      position: relative;
      right: 1px;
      top: 5px;
    }
  }

  .columns {
    column-count: 2;
    column-gap: 2rem;
  }

  .description-container {
    background-color: #f1eee9;
    padding: 0.7rem;
    margin-bottom: 2rem;
    p {
      color: #8d7e70;
    }
  }
`;

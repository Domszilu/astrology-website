import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55rem;
  width: 90rem;
  background-color: #f1eee9;
  margin: 10rem 30rem;
  border-radius: 10px;
`;

export const FormContainer = styled.div`
  text-align: center;
  width: 80%;
  padding: 5rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const Header = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    color: #666;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FormSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 9%;
  left: 44.9%;
  img {
    width: 35%;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
// Jost, Open Sans, Gilda Display
@import url('https://fonts.googleapis.com/css2?family=Gilda+Display&family=Jost:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

* {
  padding   : 0;
  margin    : 0;
  box-sizing: border-box;
}

:root {
  font-family: "Gilda Display",
    serif;
  font-size: 62.5%;
  color: #1b1b1b;

}

body {
  font-size: 1.6rem;
  height   : 100vh;
}
`;

export default GlobalStyles;

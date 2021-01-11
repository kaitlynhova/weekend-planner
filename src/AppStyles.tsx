import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #F0F2F5;
    font-family: 'Inter', sans-serif;
    margin: 0;
  }

  p, h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    margin: 0;
  }

  button, input {
    border: none;
    border-radius: 0;
  }
`;

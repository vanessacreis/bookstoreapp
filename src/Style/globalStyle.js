import { createGlobalStyle } from "styled-components";

export const colors = {
  name: "colors",
  black: "#0D0D0D",
  white: "#FCFCFC",
  blue: "#142126",
  red: "#8C1818",
  contrast: "#D9BFA0",
  orange: "#E2A35D",
  titles: "'Lora', serif",
  text: "'Montserrat', sans-serif",
};

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${colors.white};
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.orange};
    }
  }

  html,body{
    width: 100%;
    min-height: 100vh;
  }
`;

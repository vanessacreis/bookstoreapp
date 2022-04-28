import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: ${colors.text};
`;

export const Logo = styled.section`
  width: 100%;
  height: 70vh;
  background-image: url(/assets/imgs/bg-home.svg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Vitrine = styled.section`
  width: 100%;
  height: auto;
  min-height: 120vh;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frase = styled.p`
  width: 80%;
  min-height: 70px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 25px;
  background-image: url(/assets/icons/quote.svg);
  background-repeat: no-repeat;
  background-position: left;
  color: ${colors.black};
  font-size: 26px;
  line-height: 30px;

  .autor {
    color: ${colors.red};

    &::selection {
      background-color: ${colors.contrast}80;
    }
  }

  &::selection {
    background-color: ${colors.contrast}80;
  }
`;

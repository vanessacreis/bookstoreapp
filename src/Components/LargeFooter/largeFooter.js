import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Footer = styled.footer`
  width: 100%;
  height: 120px;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .separador {
    width: 70%;
  }
`;

export const Redes = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.white};
  font-family: ${colors.text};
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;

  p {
    display: flex;
    align-items: center;
  }

  .iconRedes {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

export const Copyright = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 15px;
    }

    > img {
      width: 45px;
      height: 45px;
      margin-right: 15px;
    }
  }

  p {
    color: ${colors.white};
    font-family: ${colors.titles};
    font-size: 13px;
  }
`;

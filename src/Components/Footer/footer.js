import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
`;

export const Copyright = styled.div`
  width: 45%;
  color: ${colors.white};
  font-family: ${colors.titles};
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }

  .logo {
    margin-right: 15px;
  }
`;

export const Redes = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }
`;

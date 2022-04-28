import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 125px);
  background-image: url(/assets/imgs/bg-livreiro.png);
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    background-image: none;
  }
`;

export const Login = styled.div`
  width: 500px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 75px;
  float: right;

  > img {
    width: 400px;
    margin-top: 100px;
    filter: drop-shadow(5px 5px 10px ${colors.white});
  }
`;

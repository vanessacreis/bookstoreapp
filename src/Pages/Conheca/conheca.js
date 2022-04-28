import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  min-height: 160vh;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${colors.text};
`;

export const Historia = styled.section`
  width: 80%;
  height: auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  > p {
    margin-top: 25px;
    margin-bottom: 10px;
    color: ${colors.black};
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
  }

  > span {
    color: ${colors.red};
  }
`;

export const divRota = styled.div`
  width: 80%;
  height: 80px;
  background-image: url(/assets/imgs/routediv.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Viagem = styled.section`
  width: 80%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const Mapa = styled.div`
  width: 50%;
  height: 70vh;

  > h1 {
    font-size: 26px;
    font-weight: 400;
    color: ${colors.red};
    line-height: 36px;
    margin-bottom: 10px;
  }

  > p {
    margin-bottom: 10px;
    color: ${colors.black};
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
  }
`;

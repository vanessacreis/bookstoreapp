import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 125px);
  background-image: url(/assets/imgs/BG-Livros.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .cards {
    width: 50%;
    margin-left: 25px;

    .cima {
      width: 100%;
      margin-bottom: 25px;
      display: flex;
      justify-content: space-around;
    }

    .baixo {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .logo {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 400px;
      margin-top: 100px;
    }

    > p {
      font-family: ${colors.text};
      font-size: 20px;
    }
  }
`;

import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Coluna = styled.aside`
  height: 100%;
  width: 30%;
  background-color: ${colors.contrast};
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 75px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Publi = styled.div`
  width: 80%;
  margin-top: 30px;
  font-size: 18px;
  line-height: 30px;

  .descri {
    font-family: ${colors.titles};
    color: ${colors.red};
    font-weight: lighter;
  }
`;

export const Descricao = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Texto = styled.div`
  width: 85%;
  height: 60%;

  > h1 {
    font-family: ${colors.titles};
    font-weight: lighter;
    font-size: 26px;
    color: ${colors.red};
  }

  > h3 {
    font-family: ${colors.titles};
    font-weight: lighter;
    font-size: 16px;
  }

  > p {
    height: 70%;
    margin-top: 30px;
    text-align: justify;
    line-height: 20px;
    overflow-y: scroll;
  }
`;

export const Reserve = styled.div`
  width: 85%;
  display: flex;

  > p {
    color: ${colors.red};
    font-size: 20px;
    margin-right: 30px;
  }

  > button {
    width: 100px;
    height: 30px;
    background-color: ${colors.contrast};
    font-family: ${colors.text};
    font-size: 15px;
    border-style: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px;
    align-self: center;
    cursor: pointer;

    > a {
      color: ${colors.black};
      text-decoration: none;
    }
  }
`;

import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Formulario = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: ${colors.text};
`;

export const Label = styled.label`
  width: 100px;
  font-family: ${colors.titles};
  font-size: 14px;
`;

export const Coluna = styled.aside`
  height: 100%;
  width: 30%;
  background-color: ${colors.contrast};
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 30px;
    margin-bottom: 25px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  > fieldset {
    height: 35px;
    border: none;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .input {
    height: 30px;
    width: 80%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${colors.red};
    font-size: 15px;
    padding: 5px;
    background-color: transparent;
  }
`;

export const Descricao = styled.section`
  width: 70%;
  height: 100%;
`;

export const Caixa = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 65px;

  > fieldset {
    height: 45%;
    border: none;
    display: flex;
    flex-direction: column;
  }

  .divBtn {
    width: 100%;
    margin-top: 15px;
  }

  .input {
    height: 30px;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${colors.red};
    font-size: 15px;
    padding: 5px;
    background-color: transparent;
  }

  .textArea {
    width: 100%;
    padding: 5px;
    font-size: 15px;
    font-family: ${colors.text};
    line-height: 20px;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > fieldset {
    margin-bottom: 15px;
    border: none;
    display: flex;
    flex-direction: column;
  }
`;

export const Botao = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${colors.contrast};
  font-family: ${colors.text};
  font-size: 15px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
  align-self: flex-end;
  cursor: pointer;
`;

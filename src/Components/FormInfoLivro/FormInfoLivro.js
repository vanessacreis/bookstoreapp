import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Formulario = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .sectionInfolivro {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    font-family: ${colors.text};
    margin-left: 900px;
  }

  .containerInfoLivro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .divTextArea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
  // form publi
  .sectionInfoPubli {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    background-color: ${colors.contrast};
  }
  img {
    opacity: 50%;
    display: flex;
    align-self: center;
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  label {
    width: 75px;
    font-family: ${colors.text};
  }

  //infor livro
  input {
    width: 50%;
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${colors.black};
    font-family: ${colors.text};
    background-color: transparent;
    font-size: 15px;
    padding: 5px;
  }

  .divTextArea {
    display: flex;
    flex-direction: column;
  }
  .textArea {
    width: 80%;
    color: ${colors.black};
    font-family: ${colors.text};
    background-color: transparent;
    padding: 10px;
    font-size: 15px;
    border: solid 1px ${colors.black};
    border-radius: 5px;
  }
  button {
    height: 50px;
    width: 125px;
    border-radius: 10px;
    background-color: ${colors.contrast};
    align-self: flex-end;
    margin-right: 170px;
    border-style: none;
    box-shadow: 2px 2px 5px;
    cursor: pointer;
    font-family: ${colors.text};
    font-size: 15px;
    color: ${colors.black};
  }
`;

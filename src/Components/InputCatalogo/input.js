import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Pesquisa = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;

  > input {
    width: 650px;
    background-color: transparent;
    border-bottom: 2px solid ${colors.red};
    border-top-style: hidden;
    border-inline-end: none;
    border-inline-start: none;
    padding: 5px;
    font-family: ${colors.text};
    font-size: 20px;
  }
`;

export const BTNPesquisa = styled.button`
  margin-left: 10px;
  visibility: hidden;
  cursor: pointer;

  > img {
    width: 50px;
    height: 50px;
    visibility: visible;
  }
`;

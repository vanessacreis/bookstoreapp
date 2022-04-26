import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const News = styled.div`
  width: 50vw;
  height: 70vh;
  font-family: ${colors.text};
  margin: 10px;

  > h1 {
    font-size: 26px;
    font-weight: 400;
    color: ${colors.red};
    line-height: 36px;
    margin-bottom: 10px;
  }

  > p {
    width: 80%;
    margin-right: 20px;
    color: ${colors.black};
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;

  > input {
    width: 100%;
    height: 30px;
    font-family: ${colors.text};
    margin: 10px 0;
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${colors.red};
    font-size: 15px;
    padding: 5px;
  }

  .checkbox {
    margin-top: 10px;
    display: flex;
    align-items: center;

    > label {
      margin-left: 10px;
    }
  }

  > button {
    width: 75px;
    height: 30px;
    background-color: ${colors.contrast};
    color: ${colors.black};
    font-family: ${colors.text};
    font-size: 15px;
    border-style: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px;
    align-self: flex-end;
    cursor: pointer;
  }
`;

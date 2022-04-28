import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 80%;
    height: 65%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.8;
    box-shadow: 10px 5px 10px ${colors.black}90;

    &:hover {
      transition: all 1.5s;
      box-shadow: 10px 5px 10px ${colors.red}90;
      opacity: 1;
    }
  }

  .title {
    width: 70%;
    color: ${colors.black};
    font-family: ${colors.titles};
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
    word-break: break-word;
    text-align: center;

    &::selection {
      background-color: ${colors.contrast}80;
    }
  }

  .writer {
    font-size: 14px;
    font-weight: 300;
    color: ${colors.black};

    &::selection {
      background-color: ${colors.contrast}80;
    }
  }
`;

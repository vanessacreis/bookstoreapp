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
    height: 70%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.8;

    &:hover {
      transition: all 1s;
      box-shadow: 2px 2px 10px ${colors.orange};
      opacity: 1;
    }
  }

  .title {
    font-size: 15px;
    font-weight: bolder;
    color: ${colors.black};
    margin-top: 10px;

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

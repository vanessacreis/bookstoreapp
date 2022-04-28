import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Conheca = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 49%;
    min-width: 300px;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      transition: all 1s;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Texto = styled.div`
  width: 50%;
  height: 80%;
  text-align: center;

  > h3 {
    color: ${colors.red};
    font-family: ${colors.titles};
    font-weight: lighter;
    font-size: 20px;
    margin-bottom: 10px;
  }

  > p {
    width: 100%;
    margin: 0 10px;
    text-align: justify;
    font-size: 16px;

    &::selection {
      background-color: ${colors.contrast}80;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

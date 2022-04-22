import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Evento = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  line-height: 28px;

  > img {
    width: 80%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px 0;
  }

  > hr {
    width: 30%;
    margin: 20px;
  }

  > h3 {
    font-family: ${colors.titles};
    color: ${colors.red};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
  }

  > p {
    width: 80%;
    margin: 0 5px;
    text-align: center;
    font-size: 18px;
  }
`;
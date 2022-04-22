import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Local = styled.div`
  width: 140px;
  height: 250px;
  margin: 1em;
  color: ${colors.white};
  line-height: 20px;
  font-size: 14px;
  font-family: ${colors.titles};
  background-color: ${colors.red};
  clip-path: polygon(100% 100%, 50% 75%, 0 100%, 0 0, 100% 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  right: 80px;
  top: 55%;
  padding-top: 10px;

  > p {
    margin: 5px;
    text-align: center;
    word-break: break-word;
  }

  .hora {
    margin-top: 10px;
    color: ${colors.contrast};
  }
`;

import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Card = styled.div`
  width: 190px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.contrast};
  border-radius: 10px;
  font-family: ${colors.text};
  margin-right: 25px;

  &:hover {
    transition: 0.8s;
    box-shadow: 5px 2px 10px ${colors.black}90;
  }

  > img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  > h3 {
    font-weight: 400;
    margin-bottom: 10px;
    color: ${colors.red};
  }

  > p {
    width: 80%;
    font-size: 15px;
    text-align: center;
    color: ${colors.black};
  }
`;

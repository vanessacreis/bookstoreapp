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
  }

  .title {
    font-size: 15px;
    font-weight: bolder;
    color: ${colors.black};
    margin-top: 10px;
  }

  .writer {
    font-size: 14px;
    font-weight: 300;
    color: ${colors.black};
  }
`;

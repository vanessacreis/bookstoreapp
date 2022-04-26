import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Card = styled.div`
  justify-self: center;
  /* background-color: #141922; */
  transition: 0.3s;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
  > img:hover {
    width: 210px;
    height: 210px;
  }

  > p {
    width: 200px;
    word-break: break-word;
    text-align: center;
    font-weight: bolder;
  }
`;

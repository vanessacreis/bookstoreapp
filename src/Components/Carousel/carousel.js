import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.div`
  width: 30vw;
  height: 60%;
  margin: 25px;

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

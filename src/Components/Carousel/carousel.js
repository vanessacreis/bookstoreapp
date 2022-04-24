import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.div`
  width: 80vw;
  height: 70vh;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .pic {
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
  }

  .pic > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Buttons = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button > img {
    width: 15px;
    height: 15px;
  }
`;

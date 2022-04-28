import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-width: 400px;
  height: 250px;
  display: block;
  margin-top: 25px;

  @media (max-width: 600px) {
    display: none;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

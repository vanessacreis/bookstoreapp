import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url(/assets/imgs/BGpb.svg);
  background-color: ${colors.white};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${colors.text};
`;

export const Logo = styled.section`
  width: 100%;
  height: 80vh;
  background-image: url(/assets/imgs/Section1.svg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Destaque = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  width: 90%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 3%;
  margin-top: 80px;
`;

export const OutroDestaque = styled.section`
  width: 80%;
  height: 50vh;
  background-color: ${colors.white};
  margin-top: 40px;
  border-radius: 5px;
`;

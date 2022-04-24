import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.white};
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

export const Vitrine = styled.section`
  width: 100%;
  height: auto;
  min-height: 130vh;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frase = styled.p`
  width: 80%;
  min-height: 70px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 25px;
  background-image: url(/assets/icons/quote.svg);
  background-repeat: no-repeat;
  background-position: left;
  color: ${colors.black};
  font-size: 26px;
  line-height: 30px;

  .autor {
    color: ${colors.red};
  }
`;

export const Banners = styled.div`
  width: 80%;
  min-width: 400px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin-top: 15px;

  .banner1 {
    background-image: url(/assets/imgs/bienal-banner.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
  }

  .banner2 {
    background-image: url(/assets/imgs/machado-banner.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OutroDestaque = styled.section`
  width: 80%;
  height: 50vh;
  background-color: ${colors.white};
  margin: 40px;
  border-radius: 5px;
`;

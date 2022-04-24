import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Header = styled.header`
  width: 100%;
  height: 75px;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 35px;
  position: fixed;
  z-index: 2;

  .nav_link {
    color: ${colors.white};
    font-family: ${colors.text};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
  }

  .nav_link:hover {
    color: ${colors.contrast};
    transition: all 0.5s;
  }

  .active {
    font-weight: 600;
    color: ${colors.contrast};
  }
`;

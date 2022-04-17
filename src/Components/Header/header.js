import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Header = styled.header`
  width: 100%;
  height: 75px;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;

  .nav_link {
    color: ${colors.white};
    font-family: ${colors.text};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }
  .nav_link:hover {
    text-decoration: underline;
    color: ${colors.contrast};
    font-weight: 600;
  }

  .active {
    font-weight: 600;
    color: ${colors.contrast};
  }
`;

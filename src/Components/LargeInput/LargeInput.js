import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const LargeInput = styled.input`
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: "white";

  color: ${colors.black};
  font-size: ${colors.text};
  /* Adapt the colors based on primary prop */
  background-color: ${(props) => (props.color ? colors.contrast : "white")};
`;

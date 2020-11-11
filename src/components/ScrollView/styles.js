import styled from "styled-components";
import theme from "../../utils/theme";

export const Section = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;
  min-width: 580px;
  height: 87vh;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${theme.colors.white};
    border-radius: 10px;
    margin: 3em 0px 1.7em 0px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    height: 200px;
  }
  &::-webkit-scrollbar-button {
    visibility: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.red};
    box-shadow: inset 0 0 6px ${theme.colors.buttonShadow};
    border-radius: 10px;
  }
`;

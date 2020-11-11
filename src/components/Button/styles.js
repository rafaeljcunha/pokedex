import styled, { keyframes } from "styled-components";
import theme from "../../utils/theme";

const buttonAnimation = keyframes`
  from {
    background: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    color: ${theme.colors.white};
    font-size: 14px;
  } to{
    background-color: ${theme.colors.buttonHover};
    border: 1px solid ${theme.colors.buttonShadow};
    box-shadow: inset 0 0 6px ${theme.colors.buttonShadow};
    font-size: 16px;
  }

`;

export const Button = styled.button`
  width: 280px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  background: ${({ disabled }) =>
    disabled ? theme.colors.disabledButton : theme.colors.red};
  border: 1px solid
    ${({ disabled }) =>
      disabled ? theme.colors.disabledButton : theme.colors.red};
  color: ${theme.colors.white};
  &:hover {
    cursor: pointer;
    background-color: ${({ disabled }) =>
      !disabled && theme.colors.buttonHover};
    border: ${({ disabled }) =>
      !disabled && `1px solid ${theme.colors.buttonShadow}`};
    box-shadow: ${({ disabled }) =>
      !disabled && `inset 0 0 3px ${theme.colors.buttonShadow}`};
    animation: ${({ disabled }) => !disabled && buttonAnimation} 1.3s;
    font-size: ${({ disabled }) => !disabled && "16px"};
  }
`;

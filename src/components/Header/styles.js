import styled, { keyframes } from "styled-components";
import theme from "../../utils/theme";

const headerAnimation = keyframes`
  from{
    width: 100vw;
    height: 100vh;
  } to{
    width: 100vw;
    height: 13vh;
  }

`;

const headerImageAnimation = keyframes`
  from{
    width: 420px;
    height: auto;
  } to{
    width: 210px;
    height: auto;
  }

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.red};
  height: 13vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  min-width: 637px;
  min-height: 100px;
  animation: ${headerAnimation} 2s;
`;

export const Nav = styled.nav`
  font-size: 30px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const Image = styled.img`
  width: 210px;
  height: auto;
  animation: ${headerImageAnimation} 2s;
`;

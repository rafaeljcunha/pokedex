import styled, { keyframes } from "styled-components";
import theme from "../../utils/theme";

const cardAnimation = keyframes`
  from {
    opacity: 0;
    width: 120px;
    height: 120px;
  } to{
    opacity: 1;
    width: 180px;
    height: 180px;
  }

`;

const imageAnimation = keyframes`
  from {
    opacity: 0;
    width: 60px;
    height: 60px;
  } to{
    opacity: 1;
    width: 115px;
    height: 115px;
  }

`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 180px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-bottom: 20px;
  animation: ${cardAnimation} 1.7s;
  &:hover {
    border: 1px solid ${theme.colors.red};
    box-shadow: inset 0 0 6px ${theme.colors.red};
    cursor: pointer;
    background-color: #e1e1e1;
  }
`;

export const AlignCenter = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 60px 0px 40px 0px;
`;

export const Image = styled.img`
  width: 105px;
  height: 105px;
  margin-bottom: 30px;
  animation: ${imageAnimation} 1.7s;
`;

export const Name = styled.h3``;

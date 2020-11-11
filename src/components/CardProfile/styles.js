import styled, { keyframes } from "styled-components";
import theme from "../../utils/theme";

const cardAnimation = keyframes`
  from{
    opacity: 0;
   
  } to {
    opacity: 1;    
    
  }
`;

export const CardProfileContainer = styled.div`
  width: 420px;
  height: auto;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  animation: ${cardAnimation} 2.2s ease;
  @media only screen and (max-width: 576px) {
    width: 95%;
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 70%;
  height: 70%;
`;
export const Name = styled.h2`
  margin: 20px 0px;
`;
export const Ability = styled.h3`
  margin-bottom: 20px;
  width: 250px;
  height: 40px;
  background: ${theme.colors.red};
  border-radius: 20px;
  text-align: center;
  padding: 7px;
  color: ${theme.colors.white};
`;

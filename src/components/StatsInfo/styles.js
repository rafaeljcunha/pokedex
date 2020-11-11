import styled, { keyframes } from "styled-components";
import theme from "../../utils/theme";

const baseContainerAnimation = keyframes`
  from{
    opacity: 0
  } to {
    opacity: 1
  }

`;

export const StatsBaseContainer = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  animation: ${baseContainerAnimation} 2.2s;
  @media only screen and (max-width: 576px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const Title = styled.h2`
  font-size: 40px;
  color: ${theme.colors.white};
  margin-bottom: 30px;
`;
export const StatsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;
export const StatsName = styled.h2`
  font-size: 20px;
  margin-right: 20px;
  color: ${theme.colors.white};
  @media only screen and (max-width: 576px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-right: 15px;
  }
`;
export const StatsValueContainer = styled.div`
  width: 70%;
  height: 30px;
  background: ${theme.colors.white};
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media only screen and (max-width: 576px) {
    width: 60%;
    margin-right: 20px;
  }
  @media only screen and (max-width: 768px) {
    width: 60%;
    margin-right: 20px;
  }
`;

export const StatsValue = styled.div`
  width: ${({ width }) => parseInt(width, 10) * 0.3333}%;
  height: 30px;
  background: ${theme.colors.red};
  border-radius: 8px;
`;

export const Stats = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${theme.colors.black};
  margin-left: 5px;
`;

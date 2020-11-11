import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 87vh;
`;

export const Message = styled.h2`
  font-size: 26px;
  color: ${theme.colors.white};
`;

export const Description = styled.h2`
  margin-top: 30px;
  font-size: 22px;
  color: ${theme.colors.white};
`;

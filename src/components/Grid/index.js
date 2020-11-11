import styled from "styled-components";

export const Container = styled.div`
  max-width: 1380px;
  min-width: 580px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  margin-top: ${({ marginTop }) => marginTop};
  padding: 0.5em 1em;
  margin-left: 20px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

function getGridValue(value) {
  if (!value) return;
  let width = (value / 12) * 100;
  return `width: ${width}%`;
}

export const Column = styled.div`
  float: left;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  @media only screen and (max-width: 576px) {
    ${({ xsm }) => xsm && getGridValue(xsm)}
  }
  @media only screen and (max-width: 768px) {
    ${({ sm }) => sm && getGridValue(sm)}
  }
  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getGridValue(md)}
  }
  @media only screen and (min-width: 1000px) {
    ${({ lg }) => lg && getGridValue(lg)}
  }
`;

import { createGlobalStyle } from "styled-components";
import theme from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0px;
      padding: 0px;
      outline: 0;
      box-sizing: border-box;  
  }

  body {
    background: ${theme.colors.black};
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyle;

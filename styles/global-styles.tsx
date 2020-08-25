import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
     // font-family: 'Noto Sans KR', sans-serif;
    background: #f1f1f1;
    
  }
  
  html, body {
    height: 100%;
    
    #__next {
      height: 100%;
    }
  }
  
  
  
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    //font-family:'Maven Pro', sans-serif;
  }

`;

export default GlobalStyle;
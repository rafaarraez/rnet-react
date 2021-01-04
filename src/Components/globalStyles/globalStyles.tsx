import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    word-wrap: break-word;
}

*, *:before, *:after {
    box-sizing: inherit;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;
    background: #f9f9f9;
    font-family: Roboto,'Helvetica Neue',Arial,Helvetica,sans-serif;
    font-size: 13px;
    line-height: 1.33;
    color: #212121;
    font-smoothing: antialiased;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

ol, ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: 100%;
} 

`;

export default GlobalStyles;

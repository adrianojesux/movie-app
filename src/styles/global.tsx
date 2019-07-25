import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: #666;
    font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Lato', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: unset;
  }
  a:hover{
    color: unset;
    text-decoration: none;
  }
`;
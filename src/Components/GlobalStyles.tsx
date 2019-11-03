import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
  ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-size:14px;
        background-color: white;
        color: "#000000";
    }
   
    h2,h3{
      font-family: 'Noto Sans KR thin', sans-serif;
    }
    h1,h4,span, div,a{
      font-family: 'Noto Sans KR regular', sans-serif;
    }
    input,
    button {
        &:focus, &:active{outline:none};
        font-family: 'Noto Sans KR regular', sans-serif;
        line-height: 1.3;
        font-weight: normal;
        letter-spacing: 0;
    }

    input {
    
    text-rendering: auto;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    -webkit-rtl-ordering: logical;
    cursor: text;
    font: 400 11px system-ui;

    }
  `;

export default GlobalStyle;

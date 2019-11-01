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
    h1, div{
      font-family: 'Noto Sans KR', sans-serif;
    }
    input,
    button {
        &:focus, &:active{outline:none}
    }
  `;

export default GlobalStyle;

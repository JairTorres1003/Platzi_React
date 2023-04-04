import { createGlobalStyle } from "styled-components";
import EmojiMart from "../fonts/seguiemj.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "EmojiMart";
    src: url('${EmojiMart}') format("truetype");
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, "EmojiMart";
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%; 
    position: relative;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    :hover::-webkit-scrollbar-thumb {
      background-color: rgb(126 126 126);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: rgb(126 126 126);
      border-radius: 4px;
    }
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    padding: 15px;
    position: relative;
  }
`;

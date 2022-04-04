import { injectGlobal } from "@emotion/css";

import { theme } from "./theme";

(() => injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import './reset.scss';

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    color: ${theme.colors.black};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  :focus { outline: none; }

  .container {
    width: 100%;
    max-width: 1028px;
    margin: 0 auto;
  }
`)();

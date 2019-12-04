import css from 'styled-jsx/css'
import { typo, colors } from './style.js'

export default css.global`
  :root {
    /* COLORS */
    --otsColor: #085886;
    --mainBlue: #2D9CDB;
    --pink: #FF3877;
    --pink-darker: #D52B61;
    --secondaryBlue: #1F709E;
    --mainGrey: #FAFAFA;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    /* font: ${typo.primaryFont()}; */
    /* color: ${colors.fontColor}; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
    word-break: break-word;
  }

  body > svg {
    display: block;
  }

  button {
    font-family: inherit;
  }

  b,
  strong {
    font-weight: 500;
  }

  img,
  video {
    display: block;
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: var(--mainBlue);
  }

  a.invert {
    color: var(--pink);
  }

  a:hover {
    opacity: 1;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }
`

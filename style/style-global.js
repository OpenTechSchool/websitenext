import css from 'styled-jsx/css'
import { mediaquery } from './style.js'

export default css.global`
  :root {
    /* COLORS */
    --otsColor: #085886;
    --mainBlue: #2d9cdb;
    --pink: #ff3877;
    --pink-darker: #d52b61;
    --secondaryBlue: #1f709e;
    --mainGrey: #fafafa;
    --textBlack: #4f4f4f;

    /* FONTS */
    --primaryFont: 'Roboto', sans-serif;
    --secondaryFont: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: var(--primaryFont);
    overflow-x: hidden;
    color: var(--textBlack);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: break-word;
    font-size: 18px;
    font-size: 1.8rem;
    letter-spacing: -0.5px;
    line-height: 1.5;
  }
  @media (${mediaquery.desktopToBigScreen}) {
    body {
      font-size: 20px;
      font-size: 2rem;
      line-height: 1.6;
    }
  }
  body > svg {
    display: block;
  }
  a {
    text-decoration: none;
    color: var(--mainBlue);
    font-weight: bold;
    cursor: pointer;
  }
  a:hover {
    border-bottom: 2px solid var(--mainBlue);
  }
  a.highlight {
    color: var(--pink);
  }
  a.highlight:hover {
    border-bottom: 2px solid var(--pink);
  }
  a.invert {
    color: white;
  }
  a.invert:hover {
    border-bottom: 2px solid white;
  }
  a.icon:hover,
  a.logo:hover,
  a.button:hover {
    border-bottom: none;
  }

  /* TYPOGRAPHY------------------------------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0;
    color: inherit;
    text-rendering: optimizeLegibility;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--secondaryFont);
    color: var(--mainBlue);
  }
  h1 {
    font-size: 38px;
    font-size: 3.8rem;
    letter-spacing: -1px;
    line-height: 1.1875;
    padding: 40px 0;
  }
  h2 {
    font-size: 36px;
    font-size: 3.6rem;
    letter-spacing: -0.75px;
    line-height: 1.2;
    padding: 30px 0;
  }
  h3 {
    font-size: 26px;
    font-size: 2.6rem;
    letter-spacing: -0.5px;
    line-height: 1.1875;
    padding: 25px 0;
  }
  h4 {
    font-size: 22px;
    font-size: 2.2rem;
    padding: 20px 0;
  }
  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 26px;
  }
  ul {
    text-align: center;
  }

  @media (${mediaquery.smallToTablet}) {
    h1 {
      font-size: 40px;
      font-size: 4rem;
      padding: 50px 0;
    }
    h2 {
      font-size: 38px;
      font-size: 3.8rem;
      padding: 40px 0;
    }
    h3 {
      font-size: 28px;
      font-size: 2.8rem;
      padding: 25px 0;
    }
    h4 {
      font-size: 24px;
      font-size: 2.4rem;
      padding: 25px 0;
    }
    h1,
    h2,
    h3,
    h4 {
      text-align: left;
    }
    p {
      text-align: left;
      margin-bottom: 30px;
    }
    ul {
      text-align: left;
    }
  }

  @media (${mediaquery.desktopToBigScreen}) {
    h1 {
      font-size: 58px;
      font-size: 5.8rem;
      padding: 70px 0;
    }
    h2 {
      font-size: 44px;
      font-size: 4.4rem;
      padding: 50px 0;
    }
    h3 {
      font-size: 30px;
      font-size: 3rem;
      padding: 35px 0;
    }
    h4 {
      font-size: 28px;
      font-size: 2.8rem;
      padding: 25px 0;
    }
  }

  /* LIST ------------------------------------- */
  ul {
    list-style: none;
    margin: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }
  ol {
    margin: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }
  img,
  figure,
  table,
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }
  table {
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }
  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
`

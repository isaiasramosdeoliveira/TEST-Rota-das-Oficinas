import { Global, css } from "@emotion/react";

const style = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  body {
    background: #a4abef;
  }
  a{
    text-decoration:none;
  }
`;
const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
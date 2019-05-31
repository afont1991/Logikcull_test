import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Theme specs
import specifications from "theme/specifications";

// Third party styles
import Normalize from "styled-normalize";
import "react-table/react-table.css";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  body { height: 100%; }
  body, #LogikcullRecords {
    background: #fff;
    background-image: url(https://www.logikcull.com/assets/img/iso-bg.svg);
    background-repeat: repeat;
    background-position: 50%;
    background-size: 150px;
    color: ${ props => props.theme.colors.logikcullTextDarkBlue};
    font-family: ${ props => props.theme.fonts};
    min-height: 100vh;
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={specifications} >
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Theme;

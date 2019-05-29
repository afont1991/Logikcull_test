import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

// Theme specs
import specifications from "theme/specifications";

// Third party styles
import Normalize from "styled-normalize";

const Theme = ({ children }) => (
  <ThemeProvider theme={specifications} >
    <Fragment>
      {children}
    </Fragment>
  </ThemeProvider>
);

const ThemeStyled = styled(Theme)`
  ${Normalize}
  body { height: 100%; }
  body, #app {
    min-height: 100vh;
    font-family: ${ props => props.theme.text.family};
  }
`;


export default ThemeStyled;

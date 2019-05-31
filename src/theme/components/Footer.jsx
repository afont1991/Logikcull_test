import React, { memo } from "react";
import styled from "styled-components";

// rebass components
import { Flex, Link, Image } from "rebass";

// images
import xLogo from "theme/images/back-x-md.png";
import recordsEXTREMELOGO from "theme/images/records_dope_logo.gif";

// styles
const FooterContainer = styled(Flex)`
  height: 140px;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

const Footer = memo(() => (
  <FooterContainer bg="logikcullTransparentBackground" >
    <Flex width="450px">
      <Link href="https://www.logikcull.com">
        <Image width="100px" height="100%" src="https://www.logikcull.com/public/images/logikcull-logo-color.svg" />
      </Link>
      <Image width="25px" height="25px" m="auto" src={xLogo} />
      <Image width="200px" height="50px" src={recordsEXTREMELOGO} />
    </Flex>
  </FooterContainer>
));


export default Footer;
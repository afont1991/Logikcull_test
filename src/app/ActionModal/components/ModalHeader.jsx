import React, { memo } from "react";
import styled from "styled-components";

// Rebass components
import { Flex, Heading } from "rebass";

// Styles
const ModalHeaderStyled = styled(Flex)`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: ${ (props) => props.theme.colors.logikcullTextDarkBlue };
  padding: 10px 0px;
`;

const ModalHeader = memo(({ title }) => (
  <ModalHeaderStyled>
    <Heading color="#fff" fontSize="20px" fontWeight="bold" >{title}</Heading>
  </ModalHeaderStyled>
));

export default ModalHeader;
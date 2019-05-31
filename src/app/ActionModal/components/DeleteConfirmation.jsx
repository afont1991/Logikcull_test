import React, { memo } from "react";

// Rebass components
import { Flex, Box } from "rebass";

// Theme components
import Button from "theme/components/Button";

const DeleteConfirmation = memo(({ confirm, cancel }) => (
  <Flex my={5} flex="1" alignItems="center" justifyContent="center" >
    <Box width={1/3} px={2}>
      <Button variant="primary" mx="2" onClick={confirm} >Confirm Delete?</Button>
    </Box>
    <Box width={1/3} px={2}>
      <Button variant="secondary" mx="2" onClick={cancel} >Cancel</Button>
    </Box>
  </Flex>
));

export default DeleteConfirmation;
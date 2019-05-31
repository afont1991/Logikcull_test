import React, { memo } from "react";

// Rebass components
import { Flex, Box } from "rebass";

// Theme components
import Button from "theme/components/Button";

const ActionCell = memo(({submitItem, deleteItem}) => (
  <Flex flex="1" flexWrap='wrap' justifyContent="center" alignItems="center" px="4" >
    <Box px={2} py={2} width={1/2}>
      <Button variant={ deleteItem ? "primary" : "outline" } mx="1" onClick={submitItem} >{ deleteItem ? "Edit" : "Add" }</Button>
    </Box>
    { deleteItem && (
      <Box width={1/2}>
        <Button variant="secondary" mx="1" onClick={deleteItem} >Delete</Button>
      </Box>
    )}
  </Flex>
));


export default ActionCell;
import React, { memo } from "react";
import { Field } from "redux-form";

// Utils
import { albumConditionsOptions } from "utils/albumConditionsUtility";
import { required, integer, year } from "utils/validation";

// Rebass components
import { Box, Flex } from "rebass";

// Theme components
import Button from "theme/components/Button";
import Input from "theme/components/Input";
import Select from "theme/components/Select";

const AlbumForm = memo(({ closeModal, formType }) => (
  <Flex mx={2} flexWrap='wrap' flex="1" alignItems="center" justifyContent="center" >
    <Box width={1/2} px={2}>
      <Field name="albumTitle" label="Album Title" component={Input} type="text" validate={[required]} />
    </Box>
    <Box width={1/2} px={2}>
      <Field name="artistName" label="Artist Name" component={Input} type="text" validate={[required]} />
    </Box>
    <Box width={1/2} px={2}>
      <Field name="year" label="Release Year" component={Input} type="number" validate={[required, integer, year]} />
    </Box>
    <Box width={1/2} px={2}>
      <Field name="condition" label="Condition of Album" component={Select} type="select" options={albumConditionsOptions} validate={[required]} />
    </Box>
    <Box width={1/3} px={2} mt={4} >
      <Button as="button" variant="primary" mx="2" type="submit" >{ formType === "add" ? "Submit Album" : "Submit Edits" }</Button>
    </Box>
    <Box width={1/3} px={2} mt={4} >
      <Button variant="secondary" mx="2" onClick={closeModal} >Cancel</Button>
    </Box>
  </Flex>
));

export default AlbumForm;
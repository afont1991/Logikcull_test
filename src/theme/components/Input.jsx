import React, { memo } from "react";
import styled from "styled-components";

// Material UI components
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// Styles
const FormControlStyled = styled(FormControl)`
  width: 100%;
`;


const InputStyled = memo(({ meta, input, label, ...restProps }) => (
  <FormControlStyled error={meta.touched && meta.error}>
    <InputLabel >{label}</InputLabel>
    <Input
      {...input}
      {...restProps}
    />
    {meta.touched && meta.error ? (<FormHelperText>{meta.error}</FormHelperText>) : null}
  </FormControlStyled>
));

export default InputStyled;

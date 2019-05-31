import React, { memo } from "react";
import styled from "styled-components";

// Material UI components
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// Styles
const FormControlStyled = styled(FormControl)`
  width: 100%;
`;

const SelectStyled = memo(({ meta, input, label, options, ...restProps }) => (
  <FormControlStyled error={meta.touched && meta.error}>
    <InputLabel >{label}</InputLabel>
    <Select {...input} {...restProps} input={<Input name={input.name} />} >
      <MenuItem value="" disabled >Select Condition</MenuItem>
      {options.map((option, index) => (<MenuItem key={index} value={option.value} >{option.label}</MenuItem>))}
    </Select>
    {meta.touched && meta.error ? (<FormHelperText>{meta.error}</FormHelperText>) : null}
  </FormControlStyled>
));

export default SelectStyled;

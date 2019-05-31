
import isEmpty from "is-empty";

export const required = (value) => {
  return isEmpty(value) ? "Field is required" : undefined;
}

export const integer = (value) => {
  return value && !/^\d+$/.test(value) && "Please provide a numeric value";
}

export const year = (value) => {
  return value && value.toString().length !== 4 && "Invalid year format Example: 2012";
}

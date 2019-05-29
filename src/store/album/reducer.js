
// Action types
import { IS_LOADING, IS_READY } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case IS_LOADING: {

      const { name } = action.payload;

      return {
        ...state,
        [name]: false,
      };
    }

    case IS_READY: {

      const { name } = action.payload;

      return {
        ...state,
        [name]: true,
      };
    }

    default:
      return state;
  }
}
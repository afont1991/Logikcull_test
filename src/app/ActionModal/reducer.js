
// Action types
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  INIT_MODAL,
} from "app/ActionModal/actions";

// Default state
const initialState = {

  isOpen: false,
  formData: null,
  formType: null,

};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }

    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
      };
    }

    case INIT_MODAL: {

      const { formData, formType } = action.payload;

      return {
        ...state,
        isOpen: true,
        formData,
        formType,
      }

    }

    default:
      return state;
  }
}
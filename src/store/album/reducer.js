
// Action types
import { SET_RAW_ALBUM_DATA, SET_NORMALIZED_ALBUM_DATA, SET_ALBUM_DETAILS } from "./actions";

// Default state
const initialState = {

  albumDataRaw: null,
  albumDataNormalized: null,
  albumDetailsFromLastFm: {},

};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

    case SET_RAW_ALBUM_DATA: {

      const { data } = action.payload;

      return {
        ...state,
        albumDataRaw: {...data},
      };

    }

    case SET_NORMALIZED_ALBUM_DATA: {

      const { data } = action.payload;

      return {
        ...state,
        albumDataNormalized: {...data},
      };

    }

    case SET_ALBUM_DETAILS: {

      const { details } = action.payload;

      return {
        ...state,
        albumDetailsFromLastFm: {...details}
      }

    }

    default:
      return state;
  }
}
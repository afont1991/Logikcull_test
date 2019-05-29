import { combineReducers } from "redux";

// Package reducers
import { connectRouter } from "connected-react-router";

// Common reducers
import albumReducer from "./album/reducer";

// Combine all reducers to create the state of the application
const appReducer = (history) => combineReducers({

  // Package reducers
  router: connectRouter(history),

  // Common reducers
  albums: albumReducer,

});

const rootReducer = (history) => (state, action) => appReducer(history)(state, action);

export default rootReducer;
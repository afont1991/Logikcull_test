import { combineReducers } from "redux";

// Package reducers
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from 'redux-form'

// App reducers
import actionModalReducer from "app/ActionModal/reducer";

// Common reducers
import albumReducer from "store/album/reducer";

// Combine all reducers to create the state of the application
const appReducer = (history) => combineReducers({

  // Package reducers
  form: formReducer,
  router: connectRouter(history),

  // App reducers
  actionModal: actionModalReducer,

  // Common reducers
  albums: albumReducer,

});

const rootReducer = (history) => (state, action) => appReducer(history)(state, action);

export default rootReducer;
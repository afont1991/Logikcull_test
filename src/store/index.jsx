import React from "react";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

// Root reducer
import rootReducer from "./reducer";

// Root saga
import rootSaga from "./sagas";

// Redux dev tool
import { composeWithDevTools } from "redux-devtools-extension";

// Configure Connected React Router
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// Configure saga middleware
const sagaMiddleware = createSagaMiddleware({
  onError: error => console.log("Saga Error", error)
});

// Configure redux middleware
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

// initialize redux store
const store = createStore(
  rootReducer(history),
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(middleware)
    : middleware
);

// handle additional dev dependencies
if (process.env.NODE_ENV !== "production") {
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    console.log("enabling Webpack HMR for reducers");
    module.hot.accept("./reducer", () => {
      store.replaceReducer(rootReducer(history));
    });
  }
}

// Then run the saga
sagaMiddleware.run(rootSaga);

export default ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { loadStoryListIdAction, loadStoryDetailsAction } from "./actions/index";
import handleActions from "./reducer/index";
import rootSaga from "./sagas/modelSaga";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  handleActions,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

store.dispatch(loadStoryListIdAction());

// store.dispatch(loadStoryDetailsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

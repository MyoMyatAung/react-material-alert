import { combineReducers, compose, createStore } from "redux";
import { AlertReducer } from "./reducers/AlertReducer";

export const store = createStore(
  combineReducers({
    alerts: AlertReducer,
  }),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({
        latency: 0,
      })
  )
);

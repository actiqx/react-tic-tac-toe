import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : null || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;

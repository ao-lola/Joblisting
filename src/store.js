import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

// export default function configureStore(initialState = {}) {
//   return createStore(rootReducers, initialState, applyMiddleware(thunk));
// }

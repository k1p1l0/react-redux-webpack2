import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./reducers";

let env = process.env.NODE_ENV;

let middleware, store, composeEnhancers;

if (env === "developer") {
	middleware = applyMiddleware(promise(), thunk);

	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	store = createStore(reducers, composeEnhancers(
    	middleware
  	));
} else {
	middleware = applyMiddleware(promise(), thunk);
 	
 	store = createStore(reducers, middleware);
}

export default store;
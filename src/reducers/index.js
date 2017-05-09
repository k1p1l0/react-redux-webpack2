import {combineReducers} from "redux";

import app from "./appReducer";

const stores = combineReducers({
	app
});

export default stores;
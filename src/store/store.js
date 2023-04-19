import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducers";

// creating custom logger
const myLogger = (store) => (next) => (action) => {
	if (!action) {
		return next(action);
	}

	console.log(":::::::::Action Type:::::::::: ", action.type);
	console.log(":::::::::Action Payload::::::: ", action.payload);
	console.log(":::::::::Current State:::::::: ", store.getState());

	next(action);

	console.log(":::::::::Next State::::::::::: ", store.getState());
};
const middleWares = [myLogger];

// const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

//root reducers
export const store = createStore(rootReducer, undefined, composeEnhancers);

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducers";

// creating custom logger
export const myLogger = (store) => (next) => (action) => {
	if (!action) {
		return next(action);
	}

	console.log(":::::::::Action Type:::::::::: ", action.type);
	console.log(":::::::::Action Payload::::::: ", action.payload);
	console.log(":::::::::Current State:::::::: ", store.getState());

	next(action);

	console.log(":::::::::Next State::::::::::: ", store.getState());
};
// const middleWares = [myLogger];
// redux-devtools
const enhancedComposer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__) ||
	compose;
const sagaMiddleware = createSagaMiddleware();
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter(Boolean);
const composeEnhancers = enhancedComposer(applyMiddleware(...middleWares));

//root reducers
// export const store = createStore(rootReducer, undefined, composeEnhancers);

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["cart"],
};

export const persistantReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
	persistantReducer,
	undefined,
	composeEnhancers,
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

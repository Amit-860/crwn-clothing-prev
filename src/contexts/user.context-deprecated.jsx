import { createContext, useState, useEffect, useReducer } from "react";
import {
	onAuthStateChangedListner,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
	currentUser: null,
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPE.SET_CURRENT_USER:
			return {
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type ${type}`);
	}
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;
	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user });
	};
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
			// console.log(user);
		});
		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

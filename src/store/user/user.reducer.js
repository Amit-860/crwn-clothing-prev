import { USER_ACTION_TYPE } from "./user.types";
const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state, action) => {
	if (!state) {
		state = INITIAL_STATE;
	}
	const { type, payload } = action;
	// debugger;

	switch (type) {
		case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
		case USER_ACTION_TYPE.SIGN_UP_SUCCESS:
			console.log(payload);
			return {
				...state,
				currentUser: payload,
				error: null,
			};
		case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: null };
		case USER_ACTION_TYPE.SIGN_IN_FAIL:
		case USER_ACTION_TYPE.SIGN_UP_FAIL:
		case USER_ACTION_TYPE.SIGN_OUT_FAIL:
			return { ...state, error: payload };
		default:
			return state;
	}
};

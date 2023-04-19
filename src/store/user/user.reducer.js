import { USER_ACTION_TYPE } from "./user.types";
const INITIAL_STATE = {
	currentUser: null,
};

// rome-ignore lint/style/useDefaultParameterLast: <explanation>
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	// debugger;

	switch (type) {
		case USER_ACTION_TYPE.SET_CURRENT_USER:
			// console.log(payload);
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};

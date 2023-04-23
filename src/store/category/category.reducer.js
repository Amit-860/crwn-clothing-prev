import { CATEGORIES_ACTION_TYPE } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
	categoriesArray: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (state, action) => {
	if (!state) {
		state = CATEGORIES_INITIAL_STATE;
	}
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
			return { ...state, categoriesArray: payload };
		case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTION_TYPE.FETCH_CATOGORY_SUCCESS:
			return { ...state, isLoading: false, categoriesArray: payload };
		case CATEGORIES_ACTION_TYPE.FETCH_CATOGORY_FAILED:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};

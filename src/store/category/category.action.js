import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";
import { getCategoriesAndDocuments } from "./../../utils/firebase/firebase.utils";

export const setCategoriesArray = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);

export const fetchCategoiesStart = () =>
	createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START);

export const fetchCategoiesSuccess = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPE.FETCH_CATOGORY_SUCCESS, categoriesArray);

export const fetchCategoiesFailed = (error) =>
	createAction(CATEGORIES_ACTION_TYPE.FETCH_CATOGORY_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoiesStart());
	try {
		const catgoriesArray = await getCategoriesAndDocuments("categories");
		dispatch(fetchCategoiesSuccess(catgoriesArray));
	} catch (error) {
		dispatch(fetchCategoiesFailed(error));
	}
};

import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoiesSuccess, fetchCategoiesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

export function* fetchCategoriesAsync() {
	try {
		const catgoriesArray = yield call(getCategoriesAndDocuments, "categories");
		yield put(fetchCategoiesSuccess(catgoriesArray));
	} catch (error) {
		yield put(fetchCategoiesFailed(error));
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START,
		fetchCategoriesAsync,
	);
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}

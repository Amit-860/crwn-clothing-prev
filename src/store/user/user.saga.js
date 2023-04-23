import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPE } from "./user.types";
import {
	signInSuccess,
	signInFailed,
	signUpSuccess,
	signUpFailed,
	signOutFail,
	signOutSuccess,
} from "./user.action";
import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	createAuthUserWithEmailAndPassword,
	signOutUser,
} from "../../utils/firebase/firebase.utils";
import { signInUserWithEmailAndPassword } from "./../../utils/firebase/firebase.utils";

export function* getSnapshotFromAuth(userAuth, additionalDetails) {
	try {
		const userSnapshot = yield call(
			createUserDocumentFromAuth,
			userAuth,
			additionalDetails,
		);
		console.log(userSnapshot);
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGooglePopup);
		yield call(getSnapshotFromAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithEmail({ payload }) {
	try {
		const { email, password } = payload;
		console.log(payload);
		const { user } = yield call(
			signInUserWithEmailAndPassword,
			email,
			password,
		);
		// console.log(user);
		yield call(getSnapshotFromAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
		yield call(getSnapshotFromAuth, userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield call(
			createAuthUserWithEmailAndPassword,
			email,
			password,
		);
		yield put(signUpSuccess(user, { displayName }));
	} catch (error) {
		yield put(signUpFailed(error));
	}
}

export function* signInAfterSignUp({ user, additionalDetails }) {
	yield call(getSnapshotFromAuth, user, additionalDetails);
}

export function* signOut() {
	try {
		yield call(signOutUser);
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFail(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
	yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
	yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	]);
}

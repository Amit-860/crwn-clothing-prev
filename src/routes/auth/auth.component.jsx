import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	auth,
	signInWithGoogleRedirect,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import { getRedirectResult } from "firebase/auth";

import { SignInBox } from "./auth.style";

import {
	googleSignInStart,
	emailSignInStart,
} from "./../../store/user/user.action";

import SignInForm from "../../components/sign-in/sign-in.component.jsx";
import SignUpForm from "../../components/sign-up/sign-up.component.jsx";
import { useDispatch } from "react-redux";
import {
	selectUser,
	selectUserIsLoading,
} from "../../store/user/user.selector.js";

const AuthForm = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	// const isUserLoading = useSelector(selectUserIsLoading);
	const logInGoogleUserUsingPopup = async () => {
		dispatch(googleSignInStart());
		// const resp = await signInWithGooglePopup();
		// const userDocRef = await createUserDocumentFromAuth(resp.user);
		// console.log(userDocRef);
		// console.log(userDocRef.id);
		if (user) {
			navigate("/");
		}
	};

	const defaultUserCread = {
		email: "",
		password: "",
	};
	const [userCred, setUserCred] = useState(defaultUserCread);
	const { email, password } = userCred;
	// console.log(userCred);

	const resetUserCred = () => setUserCred(defaultUserCread);

	const handleChange = (target) => {
		const { name, value } = target;
		setUserCred((userCred) => ({ ...userCred, [name]: value }));
	};

	const navigate = useNavigate();

	const handleEmailPasswordSignIn = async (event) => {
		event.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
			// console.log(email, password);
			// const resp = await signInUserWithEmailAndPassword(email, password);
			resetUserCred();
			// navigate("/");
		} catch (error) {
			alert("email/password is incorrect");
			console.log(`error encounterd while signing user in: ${error}`);
		}
	};

	// const logInUserUsingGoogleRedirect = async () => {
	// 	await signInWithGoogleRedirect();
	// };
	// useEffect(async () => {
	// 	const resp = await getRedirectResult(auth);
	// 	console.log(resp);
	// 	if (resp) {
	// 		const userDocRef = await createUserDocumentFromAuth(resp.user);
	// 		console.log(userDocRef);
	// 	}
	// }, []);

	return (
		<SignInBox>
			<SignInForm
				handleEmailPasswordSignIn={handleEmailPasswordSignIn}
				logInGoogleUserUsingPopup={logInGoogleUserUsingPopup}
				handleChange={handleChange}
				email={email}
				password={password}
			/>
			<SignUpForm className="sign-up-form" />
		</SignInBox>
	);
};

export default AuthForm;

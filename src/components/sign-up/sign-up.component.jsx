import React from "react";
import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import "./sign-up.styles.scss";

const defautlFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defautlFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (target) => {
		setFormFields((formFields) => {
			const { name, value } = target;
			return {
				...formFields,
				[name]: value,
			};
		});
	};

	const resetFormFields = () => {
		setFormFields(defautlFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = formFields;

		if (email && password === confirmPassword) {
			try {
				const resp = await createAuthUserWithEmailAndPassword(email, password);
				console.log(resp);

				const userDocRef = await createUserDocumentFromAuth(resp.user, {
					displayName: displayName,
				});
				console.log(userDocRef);

				resetFormFields();
			} catch (err) {
				if (err.code === "sign-up/email-already-in-user") {
					alert("Cannot create user, email already in use");
				} else {
					console.log("Error encoutered while creating user ", err);
				}
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label={"Display Name"}
					type='text'
					name="displayName"
					value={displayName}
					onChange={(event) => handleChange(event.target)}
					required
				/>

				<FormInput
					label={"Email"}
					type='email'
					name="email"
					value={email}
					onChange={(event) => handleChange(event.target)}
					required
				/>

				<FormInput
					label={"Password"}
					type='password'
					name='password'
					value={password}
					onChange={(event) => handleChange(event.target)}
					required
				/>

				<FormInput
					label={"Confirm Password"}
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={(event) => handleChange(event.target)}
					required
				/>

				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;

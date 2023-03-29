import React from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const UserSignIn = (props) => {
	const {
		handleEmailPasswordSignIn,
		logInGoogleUserUsingPopup,
		email,
		password,
		handleChange,
	} = props;

	return (
		<div className="sign-in-container">
			<h2>Already have an account.</h2>
			<span>Sign-in with your email and password</span>
			<FormInput
				label='Email'
				type='email'
				name="email"
				value={email}
				required={true}
				onChange={(event) => handleChange(event.target)}
			/>
			<FormInput
				label='Password'
				type='password'
				name="password"
				value={password}
				required={true}
				onChange={(event) => handleChange(event.target)}
			/>
			<div className="sign-in-form-button-container">
				<Button onClick={handleEmailPasswordSignIn}>Sign-in</Button>
				<Button
					onClick={logInGoogleUserUsingPopup}
					type="button"
					buttonType={"google"}
					styleprops={"google-button"}
				>
					GOOGLE SIGN-IN
				</Button>
			</div>
			{/* <Button onClick={signInWithGoogleRedirect}>
				Sign-in with Google Redirect
				</Button> */}
		</div>
	);
};

export default UserSignIn;

import React from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {SingInContainer, SingInFormButtonContainer, GoogleButton, FormInputStyled} from "./sign-in.styles";

const UserSignIn = (props) => {
    const {
        handleEmailPasswordSignIn,
        logInGoogleUserUsingPopup,
        email,
        password,
        handleChange,
    } = props;

    return (
        <SingInContainer>
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
            <FormInputStyled
                label='Password'
                type='password'
                name="password"
                value={password}
                required={true}
                onChange={(event) => handleChange(event.target)}
            />
            <SingInFormButtonContainer>
                <Button onClick={handleEmailPasswordSignIn}>Sign-in</Button>
                <GoogleButton
                    onClick={logInGoogleUserUsingPopup}
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.google}
                    styleprops={"google-button"}
                >
                    GOOGLE SIGN-IN
                </GoogleButton>
            </SingInFormButtonContainer>
            {/* <Button onClick={signInWithGoogleRedirect}>
				Sign-in with Google Redirect
				</Button> */}
        </SingInContainer>
    );
};

export default UserSignIn;

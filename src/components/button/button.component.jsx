import React from "react";
import "./button.styles.scss";

// default

// inverted

// google sign in

const BUTTON_TYPE_CLASSES = {
	google: "google-auth",
	inverted: "inverted",
};

const Button = ({ children, buttonType, styleprops, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${styleprops}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;

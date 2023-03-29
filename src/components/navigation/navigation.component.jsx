import React from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/87 - crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./navigation.style.scss";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	// console.log(currentUser);
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<Link className="nav-link" to="/auth" onClick={signOutUser}>
							SIGN-OUT
						</Link>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN-IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

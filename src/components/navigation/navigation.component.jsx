import React from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/87 - crown.svg";
// import { CartContext } from "../../contexts/cart.context";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {
	NavigationContainer,
	LogoContainer,
	NavLink,
	NavLinksContainer,
} from "./navigation.style.js";
import { selectUser } from "../../store/user/user.selector";

const Navigation = () => {
	const currentUser = useSelector(selectUser);
	console.log(currentUser);
	// const { isCartOpen } = useContext(CartContext);
	const isCartOpen = useSelector(selectIsCartOpen);
	// console.log(currentUser);
	const dispatch = useDispatch();
	const signOutUser = () => dispatch(signOutStart());
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink to="/auth" onClick={signOutUser}>
							SIGN-OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN-IN</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

import React from "react";
import {useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";

import {ReactComponent as CrwnLogo} from "../../assets/87 - crown.svg";
import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
    NavigationContainer,
    LogoContainer,
    NavLink,
    NavLinksContainer,
} from "./navigation.style.js";

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    // console.log(currentUser);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
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
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;

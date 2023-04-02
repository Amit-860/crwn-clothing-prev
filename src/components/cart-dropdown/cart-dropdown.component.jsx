import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartItems, CartDropdownContainer, EmptyMessage, CheckoutLink, CheckoutButton} from './cart-dropdown.styles'
import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../contexts/cart.context";

const CartDropdown = () => {
    const {cartItems, setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item}/>
                        ))) : (
                        <EmptyMessage>Your cart is empty.</EmptyMessage>
                    )}
            </CartItems>
            <CheckoutLink to="/checkout">
                <CheckoutButton onClick={() => setIsCartOpen((isOpen) => !isOpen)}>
                    GO TO CHECKOUT
                </CheckoutButton>
            </CheckoutLink>

        </CartDropdownContainer>
    );
};

export default CartDropdown;

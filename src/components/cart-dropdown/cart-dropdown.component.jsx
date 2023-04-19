import React, { useContext } from "react";
import { useSelector } from "react-redux";

import {
	CartItems,
	CartDropdownContainer,
	EmptyMessage,
	CheckoutLink,
	CheckoutButton,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import {
	selectIsCartOpen,
	selectCartItems,
} from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const isCartOpen = useSelector(selectIsCartOpen);
	console.log(cartItems, isCartOpen);
	// const navigate = useNavigate();
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty.</EmptyMessage>
				)}
			</CartItems>
			<CheckoutLink to="/checkout">
				<CheckoutButton onClick={() => dispatch(setIsCartOpen(isCartOpen))}>
					GO TO CHECKOUT
				</CheckoutButton>
			</CheckoutLink>
		</CartDropdownContainer>
	);
};

export default CartDropdown;

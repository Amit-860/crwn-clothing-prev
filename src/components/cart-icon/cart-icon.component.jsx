import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
// import { ReactComponent as ShoppingIconComponent } from "../../assets/115 - shopping-bag.svg";
// import { CartContext } from "../../contexts/cart.context";
import {
	selectCartCount,
	selectIsCartOpen,
} from "./../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
	const dispatch = useDispatch();
	// const { setIsCartOpen, cartCount } = useContext(CartContext);
	const isCartOpen = useSelector(selectIsCartOpen);
	console.log(isCartOpen);
	const cartCount = useSelector(selectCartCount);
	const toggleCartOpen = () => dispatch(setIsCartOpen(isCartOpen));

	// const count = cartItems.reduce(
	// 	(accumulator, item) => accumulator + item.quantity,
	// 	0,
	// );
	// const test = () => {
	// 	return cartItems.reduce(
	// 		(accumulator, item) => accumulator + item.quantity,
	// 		0,
	// 	);
	// };
	// console.log(test());

	return (
		<CartIconContainer onClick={toggleCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;

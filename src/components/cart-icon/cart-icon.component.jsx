import React, { useContext } from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/115 - shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleCartOpen = () => setIsCartOpen((isOpen) => !isOpen);

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
		// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="cart-icon-container" onClick={toggleCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;

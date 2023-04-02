import React, { useContext } from "react";

import  {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";
import { ReactComponent as ShoppingIconComponent } from "../../assets/115 - shopping-bag.svg";
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
		<CartIconContainer onClick={toggleCartOpen}>
			<ShoppingIcon/>
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;

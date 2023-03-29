import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	return (
		<div className=" cart-dropdown-container ">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button onClick={() => setIsCartOpen((isOpen) => !isOpen)}>
				<Link className="checkout-link" to="/checkout">
					GO TO CHECKOUT
				</Link>
			</Button>
		</div>
	);
};

export default CartDropdown;

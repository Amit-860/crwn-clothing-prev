import React, { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
	// const { cartItems, total } = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	// console.log(total);
	const cartItemElements = cartItems.map((cartItem) => {
		return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
	});

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItemElements}
			<span className="total">Total: ${total}</span>
		</div>
	);
};

export default Checkout;

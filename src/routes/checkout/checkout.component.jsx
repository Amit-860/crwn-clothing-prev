import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
	const { cartItems, total } = useContext(CartContext);
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
					<span>Prime</span>
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

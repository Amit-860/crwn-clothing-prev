import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { increamentItem, decrementItem, removeItem } = useContext(CartContext);
	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className="arrow" onClick={() => decrementItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className="arrow" onClick={() => increamentItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<span className="remove-button" onClick={() => removeItem(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};

export default CheckoutItem;

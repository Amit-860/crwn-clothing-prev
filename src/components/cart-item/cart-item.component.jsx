import React from "react";

import "./cart-item.styles.scss";

const CartItem = (props) => {
	const { name, imageUrl, price, quantity } = props.cartItem;
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} X ${price}
				</span>
				{/* <span>+</span>
				<span>-</span> */}
			</div>
		</div>
	);
};

export default CartItem;
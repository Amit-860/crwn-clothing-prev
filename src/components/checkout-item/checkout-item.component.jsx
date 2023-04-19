import React, { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";
import {
	increamentItem,
	decrementItem,
	removeItem,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

import {
	ImageContainer,
	Img,
	Name,
	Arrow,
	Price,
	Quantity,
	Value,
	RemoveButton,
	CheckoutItemContainer,
} from "./checkout-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	// const { increamentItem, decrementItem, removeItem } = useContext(CartContext);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<Img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={() => dispatch(decrementItem(cartItems, cartItem))}>
					&#10094;
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={() => dispatch(increamentItem(cartItems, cartItem))}>
					&#10095;
				</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={() => dispatch(removeItem(cartItems, cartItem))}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;

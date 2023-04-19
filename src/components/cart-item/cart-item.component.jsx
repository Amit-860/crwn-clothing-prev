import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increamentItem, decrementItem } from "../../store/cart/cart.action";

// import { CartContext } from "../../contexts/cart.context";

import {
	ManageContainer,
	CartManageContainer,
	Img,
	CartItemContainer,
	Name,
	ItemDetails,
	Icon,
} from "./cart-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	// const { increamentItem, decrementItem } = useContext(CartContext);
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	return (
		<CartItemContainer>
			<Img src={imageUrl} alt={name} />
			<ItemDetails>
				<Name className="name">{name}</Name>
				<ManageContainer>
					<span className="price">
						{quantity} X ${price}
					</span>
					<div className="sign-container">
						<Icon onClick={() => dispatch(increamentItem(cartItems, cartItem))}>
							+
						</Icon>
						<Icon onClick={() => dispatch(decrementItem(cartItems, cartItem))}>
							-
						</Icon>
					</div>
				</ManageContainer>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;

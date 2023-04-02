import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {ManageContainer, CartManageContainer, Img, CartItemContainer, Name, ItemDetails, Icon} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { increamentItem, decrementItem } = useContext(CartContext);
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
						{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<Icon
							onClick={() => increamentItem(cartItem)}
						>
							+
						</Icon>
						{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<Icon
							onClick={() => decrementItem(cartItem)}
						>
							-
						</Icon>
					</div>
				</ManageContainer>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;

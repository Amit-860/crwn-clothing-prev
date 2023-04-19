// import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import {CartContext} from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";

import {
	Img,
	StyledButton,
	Name,
	Price,
	Footer,
	ProductCardContainer,
} from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const PorductCard = (product) => {
	const { name, price, imageUrl } = product;
	// const {addItemToCart} = useContext(CartContext);
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<Img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{`$${price}`}</Price>
			</Footer>
			<StyledButton
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</StyledButton>
		</ProductCardContainer>
	);
};

export default PorductCard;

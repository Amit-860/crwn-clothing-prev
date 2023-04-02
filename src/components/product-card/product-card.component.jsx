import {useContext} from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";

import {Img, StyledButton, Name, Price, Footer, ProductCardContainer} from "./product-card.styles";

const PorductCard = (product) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{`$${price}`}</Price>
            </Footer>
            <StyledButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add to Cart
            </StyledButton>
        </ProductCardContainer>
    );
};

export default PorductCard;

import React, {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

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

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {increamentItem, decrementItem, removeItem} = useContext(CartContext);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <Arrow onClick={() => decrementItem(cartItem)}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <Arrow onClick={() => increamentItem(cartItem)}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <RemoveButton onClick={() => removeItem(cartItem)}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;

import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "./../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, producttoAdd) => {
	const exixtingCartItem = cartItems.find(
		(cartItem) => cartItem.id === producttoAdd.id,
	);

	if (exixtingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === producttoAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}
	return [...cartItems, { ...producttoAdd, quantity: 1 }];
};

const increaseQuantity = (cartItems, cartItemToIncrease) => {
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToIncrease.id
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem,
	);
};

const decreaseQuantity = (cartItems, cartItemToDecrease) => {
	if (cartItemToDecrease.quantity === 1) {
		return deleteCartItem(cartItems, cartItemToDecrease);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToDecrease.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem,
	);
};

const deleteCartItem = (cartItems, cartItemToDelete) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};

export const setIsCartOpen = (boolean) => {
	const newBoolean = !boolean;
	return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, newBoolean);
};

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const increamentItem = (cartItems, cartItemToIncrease) => {
	const newCartItems = increaseQuantity(cartItems, cartItemToIncrease);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decrementItem = (cartItems, cartItemToReduce) => {
	const newCartItems = decreaseQuantity(cartItems, cartItemToReduce);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, cartItemToDelete) => {
	const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

import { createContext, useReducer } from "react";

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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	increamentItem: () => {},
	decrementItem: () => {},
	removeItem: () => {},
	total: 0,
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	total: 0,
};

const CART_TYPE_ACTION = {
	SET_CART_ITEM: "SET_CART_ITEM",
	SET_CART_OPEN_CLOSE: "SET_CART_OPEN_CLOSE",
};

const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_TYPE_ACTION.SET_CART_ITEM:
			return {
				...state,
				...payload,
			};
		case CART_TYPE_ACTION.SET_CART_OPEN_CLOSE:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`Unhandled type of ${type} in cartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const { isCartOpen, cartItems, cartCount, total } = state;

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducers(newCartItems);
	};

	const increamentItem = (cartItemToIncrease) => {
		const newCartItems = increaseQuantity(cartItems, cartItemToIncrease);
		updateCartItemsReducers(newCartItems);
	};

	const decrementItem = (cartItemToReduce) => {
		const newCartItems = decreaseQuantity(cartItems, cartItemToReduce);
		updateCartItemsReducers(newCartItems);
	};

	const removeItem = (cartItemToDelete) => {
		const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
		updateCartItemsReducers(newCartItems);
	};

	const setIsCartOpen = () => {
		const newIsCartOpen = !isCartOpen;
		dispatch({
			type: "SET_CART_OPEN_CLOSE",
			payload: newIsCartOpen,
		});
	};

	const updateCartItemsReducers = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0,
		);
		const newTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0,
		);

		dispatch({
			type: "SET_CART_ITEM",
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				total: newTotal,
			},
		});
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		increamentItem,
		decrementItem,
		removeItem,
		total,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

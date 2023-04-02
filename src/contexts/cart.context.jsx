import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0,
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0,
		);
		setTotal(newTotal);
	}, [cartItems]);
	const addItemToCart = (productToAdd) => {
		const updatedCartItems = addCartItem(cartItems, productToAdd);
		setCartItems(updatedCartItems);
	};

	const increamentItem = (cartItemToIncrease) => {
		setCartItems(increaseQuantity(cartItems, cartItemToIncrease));
	};

	const decrementItem = (cartItemToReduce) => {
		setCartItems(decreaseQuantity(cartItems, cartItemToReduce));
	};

	const removeItem = (cartItemToDelete) => {
		setCartItems(deleteCartItem(cartItems, cartItemToDelete));
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

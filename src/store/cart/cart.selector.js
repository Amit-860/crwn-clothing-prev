import { createSelector } from "reselect";

const selectCartReducer = (state) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen,
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
);

// export const selectCartCount = (state) => {
//     console.log("cart selector")
// 	return state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
// }

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0,
	),
);

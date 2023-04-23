import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectUser = createSelector([selectUserReducer], (userSlice) => {
	return userSlice.currentUser;
});

export const selectUserIsLoading = createSelector(
	[selectUserReducer],
	(userSlice) => {
		console.log(userSlice);
		return userSlice.isLoading;
	},
);

import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categorieSlice) => categorieSlice.categoriesArray,
);

export const selectCategory = createSelector(
	[selectCategories],
	(categoriesArray) => {
		// console.log(categories.categoriesArray);
		return categoriesArray.reduce((acc, categoryItem) => {
			const { title, items } = categoryItem;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	},
);

export const selectIsLoading = createSelector(
	[selectCategoryReducer],
	(categorySlice) => categorySlice.isLoading,
);

import React from "react";
import { useSelector } from "react-redux";
import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context-depricated";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "./../../components/category-preview/category-preview.component";
import {
	selectIsLoading,
	selectCategories,
} from "../../store/category/category.selector";

import Spinner from "./../../components/spinner/spinner.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategories);
	const isLoading = useSelector(selectIsLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="categories-preview-container">
					{Object.keys(categoriesMap).map((title) => {
						const products = categoriesMap[title];
						return (
							<CategoryPreview key={title} title={title} products={products} />
						);
					})}
				</div>
			)}
		</>
	);
};

export default CategoriesPreview;

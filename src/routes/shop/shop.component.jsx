import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.componenet";
import Category from "../category/category.compnent";

import "./shop.styles.scss";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;

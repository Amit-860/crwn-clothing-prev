import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.componenet";
import Category from "../category/category.compnent";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesArray } from "../../store/category/category.action";

import "./shop.styles.scss";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments("categories");
			dispatch(setCategoriesArray(categoriesArray));
		};
		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import PorductCard from "../../components/product-card/product-card.component";
import { getCategory } from "../../store/category/category.selector";

import "./category.styles.scss";

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(getCategory);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="shop-category-container">
				{products?.map((product) => (
					<PorductCard key={product.id} {...product} />
				))}
			</div>
		</>
	);
};

export default Category;

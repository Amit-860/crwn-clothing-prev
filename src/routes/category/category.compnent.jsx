import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import PorductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	// console.log(categoriesMap);
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

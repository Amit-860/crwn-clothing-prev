import {
	H2,
	P,
	BackgroundImage,
	CategoryBodyContainer,
	CategoryContainer,
} from "./category-item.style";
import React from "react";
import { useNavigate } from "react-router";

const CategoryItem = (props) => {
	const navigate = useNavigate();
	const { title, imageUrl } = props;
	return (
		<CategoryContainer>
			<BackgroundImage
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<CategoryBodyContainer
				onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
			>
				<H2>{title.toUpperCase()}</H2>
				<P>Shop Now</P>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
};

export default CategoryItem;

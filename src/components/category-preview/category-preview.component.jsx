import { Link } from "react-router-dom";
import PorductCard from "./../product-card/product-card.component";

import {
	Title,
	Preview,
	CategoryPreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = (props) => {
	// const title = props.products.title;
	// const products = props.products.items;

	const { title, items: products } = props.products;

	return (
		<CategoryPreviewContainer>
			<h2>
				<Title>
					<Link to={`${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
				</Title>
			</h2>
			<Preview>
				{products
					.filter((_, ind) => ind < 4)
					.map((product) => (
						<PorductCard key={product.id} {...product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;

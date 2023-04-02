import CategoryItem from "../category-item/category-item.component";
import {CategoriesContainer} from "./category-menu.style";

const CategoryMenu = (props) => {
	const { categoryItems } = props;
	return (
		<CategoriesContainer>
			{categoryItems.map((category) => (
				<CategoryItem key={category.id} {...category} />
			))}
		</CategoriesContainer>
	);
};

export default CategoryMenu;

import CategoryItem from "../category-item/category-item.component";
import "./category-menu.style.scss";

const CategoryMenu = (props) => {
	const { categoryItems } = props;
	return (
		<div className='categories-container'>
			{categoryItems.map((category) => (
				<CategoryItem key={category.id} {...category} />
			))}
		</div>
	);
};

export default CategoryMenu;

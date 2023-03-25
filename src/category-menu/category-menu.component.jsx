import CategoryItem from '../components/category-item/category-item.component'
import './category-menu.style.scss'

const CategoryMenu = (props) => {
   const { categoryItems } = props
   return (
      categoryItems.map((category) => (
         <CategoryItem key={category.id} {...category} />
      ))
   )
}

export default CategoryMenu

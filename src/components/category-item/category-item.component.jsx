import {H2, P, BackgroundImage, CategoryBodyContainer, CategoryContainer} from './category-item.style'
import React from 'react'


const CategoryItem = (props) => {
   const { title, imageUrl } = props
   return (
      < CategoryContainer>
         <BackgroundImage
            style={{
               backgroundImage: `url(${imageUrl})`,
            }}
         />
         <CategoryBodyContainer>
            <H2>{title}</H2>
            <P>Shop Now</P>
         </CategoryBodyContainer>
      </CategoryContainer >
   )
}

export default CategoryItem

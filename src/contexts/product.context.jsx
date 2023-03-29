import { createContext, useState } from "react";

import { data } from "../shop-data.js"; // temp data

export const ProductsContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(data);
	const value = { products: products };
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

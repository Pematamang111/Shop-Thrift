import { useContext, createContext, useState } from 'react';

const cartContext = createContext();

export const cartProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => setIsOpen((prev) => !prev);

	const addProduct = (product) => {
		const isExisting = product.find((p) => p.id === product.id);

		if (isExisting) {
			setProducts((prev) => {
				const updatedProducts = prev.map((p) => {
					return p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p;
				});
			});
		} else {
			setProducts((prev) => {
				return [...prev, product];
			});
		}
	};
};

export const useCartContext = () => {
	return useContext(cartContext);
};

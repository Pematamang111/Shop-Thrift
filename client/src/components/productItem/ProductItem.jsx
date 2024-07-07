import React from 'react';
import './productItem.css';
import products from '../../data/data';
import { useCartContext } from '../../ctx/cartContext';

export const Products = () => {
	const { addProduct } = useCartContext();
	return (
		<div className="container">
			{products.map((product) => {
				<div key={product.id}>
					<img src={product.img} alt="apparal" />
					<div className="product-details">
						<h3>{product.name}</h3>
						<span>${product.price}</span>
					</div>
					<button onClick={() => addProduct(product)}>Add To Cart</button>
				</div>;
			})}
		</div>
	);
};

import React from 'react';
import './cart.css';
import { useCartContext } from '../../ctx/cartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Cart = () => {
	const { products, toggleCart, isOpen, removeProduct } = useCartContext;

	return (
		<div className="container">
			<div className="wrapper">
				<div className="cartIcon" onClick={toggleCart}>
					<AiOutlineShoppingCart size={25} />
					<span className="cartNumber">{products?.length}</span>
				</div>
			</div>
		</div>
	);
};

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
				{isOpen && (
					<div className="cartContainer">
						{products?.length > 0? (
							<>
							<h4>Products</h4>
							<div className="productConatiner">
								{products.map((product) => (
                                  <div className="product" key={product.id}>
									
								  </div>
								))}
							</div>
							</>
						) : (<h3>No products in cart</h3>)}
					</div>
				)}
			</div>
		</div>
	);
};

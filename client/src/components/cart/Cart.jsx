import React from 'react';
import './cart.css';
import { useCartContext } from '../../ctx/cartContext';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { loadStripe } from '@stripe/stripe-js'

export const Cart = () => {
	const { products, toggleCart, isOpen, removeProduct } = useCartContext;
	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
	const handleCheckout = async() => {
        
	}

	return (
		<div className="container">
			<div className="wrapper">
				<div className="cartIcon" onClick={toggleCart}>
					<AiOutlineShoppingCart size={25} />
					<span className="cartNumber">{products?.length}</span>
				</div>
				{isOpen && (
					<div className="cartContainer">
						{products?.length > 0 ? (
							<>
								<h4>Products</h4>
								<div className="productConatiner">
									{products.map((product) => (
										<div className="product" key={product.id}>
											<img src={product.img} alt="product" />
											<div className="productDetails">
												<h3>{product.name}</h3>
												<span>
													{product.quantity} x ${product.price}
												</span>
											</div>
											<AiOutlineClose onClick={() => removeProduct(product)} />
										</div>
									))}
								</div>
								<div className="controls">
									<button onClick={() => {}}></button>
									<span onClick={toggleCart}>Close Cart</span>
								</div>
							</>
						) : (
							<h3>No products in cart</h3>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

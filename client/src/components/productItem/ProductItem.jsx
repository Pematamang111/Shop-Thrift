import React from 'react'
import './productItem.css';

export const Products = () => {
  return (
    <div className='container'>
      {products.map((product) => {
        <div key={product.id}>

        </div>
      }

      )}
    </div>
  )
}

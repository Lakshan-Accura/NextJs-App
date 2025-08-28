import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  return (
    <>
    <div>ProductsPage</div>
    <div className={styles.card}>
        <AddToCart />
    </div>
</>  
)
}

export default ProductsPage
import React, { useState } from 'react'
import ProductData  from '../data/data'
import { About } from '../components/About';
export const ProductList = () => {
    const [products,setProduct] = useState(ProductData);
    console.log(products);
  return (
    <>
        <About product={products} />
    </>
  )
}

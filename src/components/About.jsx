import React, { useState } from "react";
import { ProductList } from "../Pages/ProductList";
import products from "../data/data";

export const About = () => {
  const [product,setProduct] = useState(products);
  return (
    <>
      <div className="container">
        <nav>
            {
              product.map((value)=>(
                <div key={value.id}>
                  <h5>{value.name}</h5>
                  <h5>{value.price}</h5>
                  <h5>{value.qty}</h5>
                  <h5>{value.stock}</h5>
                  <h5>{value.description}</h5>
                  <h5>{value.category }</h5>
                  <img src={value.image} alt="" />
                </div>
              ))
            }
        </nav>
      </div>
    </>
  );
};

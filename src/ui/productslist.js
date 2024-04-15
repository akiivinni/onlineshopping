import React from "react";
import ProductCard from "./productscard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => ( // Use index provided by map function
        <ProductCard item={item} key={index} /> // Use index as the key
      ))}
    </>
  );
};

export default ProductsList;

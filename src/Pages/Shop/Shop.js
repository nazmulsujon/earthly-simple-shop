import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  if (products.length === 0) {
    return (
      <div className="text-center my-5">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <section className="grid lg:grid-cols-3 md:mx-32 gap-y-5 my-5">
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </section>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import AddToCartModal from "../../components/AddToCartModal/AddToCartModal";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  if (products.length === 0) {
    return (
      <div className="text-center my-20">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <section className="grid lg:grid-cols-3 md:mx-32 gap-y-10 my-20">
      {products.map((product) => (
        <ProductCard product={product} setProduct={setProduct}></ProductCard>
      ))}
      {products && <AddToCartModal product={product}></AddToCartModal>}
    </section>
  );
};

export default Shop;

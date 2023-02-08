import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const navigate = useNavigate();

  const { name, image_1, image_2, previous_price, current_price, isStock, status, id } = product;

  const [imageSource, setImageSource] = useState(image_1);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setImageSource(image_2);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setImageSource(image_1);
    setIsHovered(false);
  };

  const handleProductDetailsRoute = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Fade bottom>
      <div
        className="card w-80 mx-auto cursor-pointer"
        onClick={() => handleProductDetailsRoute(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure>
          <div className="relative inline-block">
            {status === "best_seller" ? (
              <span class="absolute top-0 start-100 badge rounded-3xl bg-success w-28 h-8 border-0 font-bold text-white">
                Bestseller
              </span>
            ) : (
              <></>
            )}
            <img
              src={imageSource}
              alt="product"
              className="rounded-3xl "
              style={{ height: "19rem", borderRadius: "3rem" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 overflow-hidden text-accent text-center border-b-0 font-mono font-bold flex items-center justify-center"
              style={{
                height: isHovered ? "50px" : 0,
                backgroundColor: "#e3ecf1cf",
                transition: "height 0.22s ease-out",
                borderBottomLeftRadius: "45px",
                borderBottomRightRadius: "45px",
              }}
            >
              Quick View
            </div>
          </div>
        </figure>
        <div className="my-5 text-accent font-semibold text-left font-mono">
          <h2>{name}</h2>
          <p>
            <del className="mr-2">{previous_price}</del>
            <span>{current_price}</span>
          </p>
        </div>
        <div className="card-actions w-80">
          <button
            disabled={isStock === "false"}
            className={
              isStock === "false"
                ? "w-full normal-case bg-secondary h-12 text-slate-50 text-sm"
                : "btn btn-accent hover:btn-secondary w-full normal-case"
            }
            style={{ borderRadius: "3rem" }}
          >
            {isStock === "false" ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default ProductCard;

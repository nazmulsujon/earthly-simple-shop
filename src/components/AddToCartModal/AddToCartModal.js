import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { toast } from "react-hot-toast";

const AddToCartModal = ({ product }) => {
  const handleAddToCart = () => {
    toast.success("Add to Cart successfully!");
  };

  return (
    <>
      <input type="checkbox" id="add-to-cart-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-accent">
          <label htmlFor="add-to-cart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div>
            <div className="container swiper-image-div my-5">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {product?.image_1 && (
                  <SwiperSlide>
                    <img src={product?.image_1} alt="product" className="mx-auto w-full h-4/5" />
                  </SwiperSlide>
                )}
                {product?.image_2 && (
                  <SwiperSlide>
                    <img src={product?.image_2} alt="product" className="mx-auto w-full h-4/5" />
                  </SwiperSlide>
                )}
                {product?.image_3 && (
                  <SwiperSlide>
                    <img src={product?.image_3} alt="product" className="mx-auto w-full h-4/5" />
                  </SwiperSlide>
                )}
                {product?.image_4 && (
                  <SwiperSlide>
                    <img src={product?.image_4} alt="product" className="mx-auto w-full h-4/5" />
                  </SwiperSlide>
                )}
                {product?.image_5 && (
                  <SwiperSlide>
                    <img src={product?.image_5} alt="product" className="mx-auto w-full h-4/5" />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <div>
              <h3 className="text-lg font-bold">{product?.name}</h3>
              <p className="font-bold text-accent">
                <del className="mr-3">{product?.previous_price}</del> <span>{product?.current_price}</span>
              </p>
              {product?.sizes && (
                <>
                  <p className="text-xl my-3 font-bold font-sans text-accent">Size</p>
                  <select className="select select-accent w-full max-w-sm rounded ">
                    {product?.sizes?.size_1 && <option>{product?.sizes?.size_1}</option>}
                    {product?.sizes?.size_2 && <option>{product?.sizes?.size_2}</option>}
                  </select>
                </>
              )}
              {product?.sets && (
                <>
                  <p className="my-3 text-xl font-bold font-sans text-accent">Set Of</p>
                  <select className="select select-accent w-full max-w-sm rounded">
                    {product?.sets?.set_1 && <option>{product?.sets?.set_1}</option>}
                    {product?.sets?.set_2 && <option>{product?.sets?.set_2}</option>}
                    {product?.sets?.set_3 && <option>{product?.sets?.set_3}</option>}
                  </select>
                </>
              )}
              <div className="quantity-input my-3 flex flex-col">
                <label className="inline-block text-accent">Quantity</label>
                <input
                  className="input input-primary input-bordered input-sm w-20 h-10 rounded font-bold mt-3"
                  type="number"
                  min={1}
                  defaultValue={1}
                />
              </div>
              <div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-success btn-wide normal-case font-thin my-3 text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
              <Link className="my-4 ml-2 font-serif underline" to={`/product/${product?.id}`}>
                View More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartModal;

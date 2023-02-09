import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { Fade, Slide } from "react-reveal";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort, BsFacebook, BsPinterest } from "react-icons/bs";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductDetails.css";
// import required modules
import { Pagination } from "swiper";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetails = () => {
  let { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const {
    name,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    previous_price,
    current_price,
    description,
    comment,
    features,
    care_guide,
    How_to_Dispose,
    sizes,
    sets,
  } = productDetails;
  // console.log(productDetails);

  const handleBuyNowModal = () => {
    Swal.fire({
      title: "We can't accept online orders right now!",
      text: "Please contact us to complete your purchase",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const handleAddToCart = () => {
    toast.success("Add to Cart successfully!");
  };

  useEffect(() => {
    fetch(`https://earthly-simple-shop-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="container px-8 md:px-32 mb-20">
      <div className="hidden lg:flex justify-between my-12">
        <div>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
          <span className="text-slate-400 font-thin">{name}</span>
        </div>
        <div className="flex items-center">
          <a href="##" className="flex items-center mr-3">
            <BsArrowLeftShort /> prev
          </a>
          |
          <a href="##" className="flex items-center ml-3">
            next <BsArrowRightShort />
          </a>
        </div>
      </div>
      <Link to="/shop" className="flex items-center justify-start my-12 md:hidden">
        <BsArrowLeftShort className="font-bold text-2xl" /> Back to Shop
      </Link>
      <div className="container swiper-image-div my-12">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {image_1 && (
            <SwiperSlide>
              <img src={image_1} alt="product" className="mx-auto w-full h-4/5" />{" "}
            </SwiperSlide>
          )}
          {image_2 && (
            <SwiperSlide>
              <img src={image_2} alt="product" className="mx-auto w-full h-4/5" />{" "}
            </SwiperSlide>
          )}
          {image_3 && (
            <SwiperSlide>
              <img src={image_3} alt="product" className="mx-auto w-full h-4/5" />{" "}
            </SwiperSlide>
          )}
          {image_4 && (
            <SwiperSlide>
              <img src={image_4} alt="product" className="mx-auto w-full h-4/5" />{" "}
            </SwiperSlide>
          )}
          {image_5 && (
            <SwiperSlide>
              <img src={image_5} alt="product" className="mx-auto w-full h-4/5" />{" "}
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <Fade left>
        <p className="text-xl lg:px-10 text-accent">{name}</p>
      </Fade>

      <div className="description-div w-11/12 mx-auto lg:flex flex-row-reverse justify-between">
        <div className="md:w-1/3">
          <p className="font-bold text-accent">
            <del className="mr-3">{previous_price}</del> <span>{current_price}</span>
          </p>

          {sizes && (
            <>
              <p className="my-5 text-xl font-bold font-sans text-accent">Size</p>
              <select className="select select-accent w-full max-w-xs rounded-none ">
                {sizes?.size_1 && <option>{sizes.size_1}</option>}
                {sizes?.size_2 && <option>{sizes.size_2}</option>}
              </select>
            </>
          )}

          {sets && (
            <>
              <p className="my-5 text-xl font-bold font-sans text-accent">Set Of</p>
              <select className="select select-accent w-full max-w-xs rounded-none ">
                {sets?.set_1 && <option>{sets.set_1}</option>}
                {sets?.set_2 && <option>{sets.set_2}</option>}
                {sets?.set_3 && <option>{sets.set_3}</option>}
              </select>
            </>
          )}
          <div className="quantity-input my-10 flex flex-col">
            <label className="inline-block text-accent">Quantity</label>
            <input
              className="input input-primary input-bordered input-sm w-20 h-10 rounded-none font-bold mt-3"
              type="number"
              min={1}
              defaultValue={1}
            />
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="btn btn-success btn-wide rounded-none normal-case font-thin mb-5 text-white"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <button
              onClick={handleBuyNowModal}
              className="btn btn-accent btn-wide rounded-none normal-case font-thin text-white"
            >
              Buy Now
            </button>
          </div>
          <div className="social-icon-div flex items-center my-3">
            <a href="" className="mr-2" style={{ color: "rgb(96, 214, 106)" }}>
              <RiWhatsappFill />
            </a>
            <a href="" className="mr-2" style={{ color: "#3a5897" }}>
              <BsFacebook />
            </a>
            <a href="" className="mr-2" style={{ color: "#2fc7f2" }}>
              <AiFillTwitterCircle />
            </a>
            <a href="" className="mr-2" style={{ color: "#f01951" }}>
              <BsPinterest />
            </a>
          </div>
        </div>
        <div className="md:w-2/3 mr-10">
          <Fade bottom>
            <p className="font-mono mt-5">{description}</p>
          </Fade>
          <Fade left>
            <p className="mb-28 font-serif mt-3 font-semibold">{comment}</p>
          </Fade>

          {/* features  */}
          {features && (
            <>
              <Slide left>
                <strong className="text-accent">Features</strong>
              </Slide>
              <Slide bottom>
                <ul className="my-12">
                  {features.feature_one && (
                    <li className="mt-8 flex items-center font-mono ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_one}
                    </li>
                  )}
                  {features.feature_two && (
                    <li className="flex items-center font-mono ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_two}
                    </li>
                  )}
                  {features.feature_three && (
                    <li className="flex items-center font-mono  ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_three}
                    </li>
                  )}
                  {features.feature_four && (
                    <li className="flex items-center font-mono ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_four}
                    </li>
                  )}
                  {features.feature_five && (
                    <li className="flex items-center font-mono ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_five}
                    </li>
                  )}
                  {features.feature_six && (
                    <li className="flex items-center font-mono ">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_six}
                    </li>
                  )}
                  {features.feature_seven && (
                    <li className="flex items-center font-mono">
                      <VscDebugBreakpointLogUnverified className="mr-2" /> {features?.feature_seven}
                    </li>
                  )}
                </ul>
              </Slide>
            </>
          )}

          {/* care guide  */}
          {care_guide && (
            <>
              <Slide left>
                <strong className="text-accent">Care Guide</strong>
              </Slide>
              <Slide bottom>
                <ul className="md:ml-5 font-mono mb-12">
                  {care_guide && <li className="mt-4 list-disc">{care_guide?.guide_one}</li>}
                  {care_guide && <li className="list-disc">{care_guide?.guide_two}</li>}
                </ul>
              </Slide>
            </>
          )}

          {/* how to dispose  */}
          {How_to_Dispose && (
            <>
              <Slide left>
                {" "}
                <strong className="text-accent ">How to Dispose</strong>
              </Slide>
              <Slide bottom>
                <h2 className="font-bold underline text-left mt-6">Do :</h2>
                <ol className="md:ml-7 font-mono">
                  {How_to_Dispose?.do_list && <li className="list-decimal">{How_to_Dispose?.do_list?.one}</li>}
                  {How_to_Dispose?.do_list && <li className="list-decimal">{How_to_Dispose?.do_list?.two}</li>}
                </ol>
              </Slide>
              <Slide bottom>
                <h2 className="font-bold underline text-left mt-6">Dont :</h2>
                <ul className="md:ml-6 font-mono">
                  {How_to_Dispose?.dont_list && <li className="list-disc">{How_to_Dispose?.dont_list?.one}</li>}
                  {How_to_Dispose?.dont_list && <li className="list-disc">{How_to_Dispose?.dont_list?.two}</li>}
                </ul>
              </Slide>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

import React, { useContext, useEffect, useRef, useState, useCallback } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Context from "../context";
import addToCart from "../helpers/addToCart";
import displayINRCurrency from "../helpers/displayCurrency";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";

const HorizontalCardProduct = ({ category = "Phone", heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollElement = useRef(null);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    try {
      await addToCart(e, id);
      fetchUserAddToCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setData(categoryProduct?.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const scrollRight = () => {
    scrollElement.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollElement.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const loadingList = Array.from({ length: 10 });

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div className="relative">
        <button
          aria-label="Scroll Left"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          aria-label="Scroll Right"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        <div
          className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-none"
          ref={scrollElement}
        >
          {loading
            ? loadingList.map((_, index) => (
                <div
                  key={index}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex animate-pulse"
                >
                  <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]"></div>
                  <div className="p-4 grid w-full gap-2">
                    <h2 className="h-5 bg-slate-200 rounded"></h2>
                    <p className="h-4 bg-slate-200 rounded"></p>
                    <div className="flex gap-3">
                      <p className="h-4 bg-slate-200 rounded w-1/2"></p>
                      <p className="h-4 bg-slate-200 rounded w-1/2"></p>
                    </div>
                    <button className="h-8 bg-slate-200 rounded"></button>
                  </div>
                </div>
              ))
            : data.map((product) => (
                <Link
                  key={product._id}
                  to={`product/${product._id}`}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex"
                >
                  <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
                    <img
                      src={product.productImage[0]}
                      alt={product?.alt || "Product Image"}
                      className="object-scale-down h-full hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4 grid">
                    <h2 className="font-medium text-base md:text-lg text-black line-clamp-1">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">{product?.category}</p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium">
                        {displayINRCurrency(product?.sellingPrice)}
                      </p>
                      <p className="text-slate-500 line-through">
                        {displayINRCurrency(product?.price)}
                      </p>
                    </div>
                    <button
                      className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full"
                      onClick={(e) => handleAddToCart(e, product._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

HorizontalCardProduct.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

export default HorizontalCardProduct;

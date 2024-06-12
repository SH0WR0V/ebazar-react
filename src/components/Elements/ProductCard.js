import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { id, category, name, image_local, price, rating, best_seller } = product;
  const { cartList, addToCart, removeFromCart } = useCart();

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setInCart(true);
    }
    else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="m-3 min-w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-4 px-2 bg-orange-600 bg-opacity-85 text-white rounded z-50">
            Best Seller
          </span>
        )}
        <div className="px-8 py-2">
          {/* <img className="rounded-t-lg w-full h-64 transform transition-transform duration-200 hover:-translate-y-2" src={image_local} alt={name} /> */}
          <img className="rounded-t-lg w-full h-64 transition-transform duration-500 transform hover:scale-105" src={image_local} alt={name} />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <span className="text-sm font-normal px-2.5 py-0.5 rounded-md bg-yellow-500 text-white dark:text-white">
            {category}
          </span>
          <h5 className="my-1 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            {name}
          </h5>
        </Link>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          {!inCart && (<button onClick={() => addToCart(product)} className={`inline-flex items-center py-1.5 px-4 text-base font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}> Add To Bag <i className="ml-1 bi bi-plus-lg"></i></button>)}
          {inCart && (<button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-1.5 px-4 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button>)}
        </p>
      </div>
    </div>
  );
};

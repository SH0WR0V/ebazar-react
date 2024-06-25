import { Link } from "react-router-dom";
import { useCart } from "../../../context";
import { useState, useEffect } from "react";

export const CartCard = ({ product }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        if (quantity > 0) {
            updateQuantity(product.id, quantity); //eslint-disable-line
        }
    }, [quantity, product.id]); //eslint-disable-line

    return (
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5">
            <div className="flex">
                <Link to={`products/${product.id}`}>
                    <img className="w-32 rounded" src={product.image_local} alt="" />
                </Link>
                <div>
                    <Link to={`products/${product.id}`}>
                        <p className="text-lg ml-2 text-gray-700 dark:text-slate-200">{product.name}</p>
                    </Link>
                    <button onClick={() => removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
                </div>
            </div>
            <div>
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                <div className="relative flex items-center max-w-[8rem]">
                    <input onChange={handleQuantityChange} type="number" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={quantity} required />
                </div>
            </div>
            <div className="text-lg text-gray-700 m-2 dark:text-slate-200">
                <label className="block mb-2 text-sm font-medium text-gray-900">Per item price</label>
                <span>${product.price}</span>
            </div>
            <div className="text-lg text-gray-700 m-2 dark:text-slate-200">
                <label className="block mb-2 text-sm font-medium text-gray-900">In Total</label>
                <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
        </div>
    );
};

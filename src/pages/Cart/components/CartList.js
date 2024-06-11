import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const { cartList, removeFromCart, total } = useCart();

    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold text-gray-700 dark:text-slate-100 my-10">
                    Your Bag {`(${cartList.length})`}
                </p>
            </section>

            <section>
                {cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold text-gray-700">Total Amount:</span>
                        <span className="text-gray-700">${total}</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button onClick={() => setCheckout(true)} type="button" className="text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {checkout && <Checkout setCheckout={setCheckout} />}
        </>
    )
}
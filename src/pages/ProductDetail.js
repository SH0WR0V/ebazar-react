import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});
    useTitle(productInfo.name);
    const [inCart, setInCart] = useState(false);
    const { cartList, addToCart, removeFromCart } = useCart();

    useEffect(() => {
        async function fetchproductInfo() {
            const data = await getProduct(id);
            setProductInfo(data);
        }
        fetchproductInfo();
    }, [id]);

    const descriptionList = productInfo.description?.split('.') || [];

    useEffect(() => {
        const productInfoInCart = cartList.find((item) => item.id === productInfo.id);
        if (productInfoInCart) {
            setInCart(true);
        }
        else {
            setInCart(false);
        }
    }, [cartList, productInfo.id]);

    return (
        <main>
            <section>
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-800 dark:text-slate-200">{productInfo.name}</h1>
                {/* <p className="mb-5 bg-sky-500/75 text-lg text-center text-gray-900 dark:text-slate-200">{productInfo.category}</p> */}
                <div className="flex flex-wrap gap-10 justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={productInfo.image_local} alt="" />
                    </div>
                    <div className="max-w-xl my-3">
                        <div className="mb-5">
                            <p className="font-bold text-xl text-gray-800">Category: <span className="ml-2 mb-5 font-medium text-white border bg-yellow-500 rounded-lg px-3 py-1 mr-2">{productInfo.category}</span></p>
                        </div>

                        <p className="text-3xl font-bold text-gray-800 dark:text-slate-200">
                            <span className="mr-1">$</span>
                            <span className="text-gray-800">{productInfo.price}</span>
                        </p>
                        <p className="my-3">
                            <span>
                                <Rating rating={productInfo.rating} />
                            </span>
                        </p>

                        <p className="my-4 select-none">
                            {productInfo.best_seller && (<span className="font-medium bg-orange-700 bg-opacity-85 text-white rounded-lg px-3 py-2 mr-2">BEST SELLER</span>)}
                            {productInfo.in_stock && (<span className="font-medium bg-green-800 bg-opacity-85 text-white rounded-lg px-3 py-2 mr-2">INSTOCK</span>)}
                            {!productInfo.in_stock && (<span className="font-medium bg-rose-800 bg-opacity-85 text-white rounded-lg px-3 py-2 mr-2">OUT OF STOCK</span>)}
                            {/* <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">5 MB</span> */}
                        </p>

                        <div className="mt-7 mb-3">
                            <p className="font-bold text-gray-800">productInfo Description:</p>
                        </div>

                        <ul className="list-disc pl-5 space-y-2">
                            {descriptionList.map((item, index) => (
                                <li className="pl-1 text-gray-800" key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="my-5">
                            {!inCart && (<button onClick={() => addToCart(productInfo)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 ${productInfo.in_stock ? "" : "cursor-not-allowed"}`} disabled={productInfo.in_stock ? "" : "disabled"}>Add To Bag <i className="ml-1 bi bi-plus-lg"></i></button>)}
                            {inCart && (<button onClick={() => removeFromCart(productInfo)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 ${productInfo.in_stock ? "" : "cursor-not-allowed"}`} disabled={productInfo.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button>)}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

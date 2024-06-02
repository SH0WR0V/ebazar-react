import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components";

export const ProductDetail = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        async function fetchProductInfo() {
            const response = await fetch(`http://localhost:8000/products/${id}`);
            const data = await response.json();
            setProductInfo(data);
        }
        fetchProductInfo();
    }, [id]);

    const descriptionList = productInfo.description?.split('.') || [];

    return (
        <main>
            <section>
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{productInfo.name}</h1>
                {/* <p className="mb-5 bg-sky-500/75 text-lg text-center text-gray-900 dark:text-slate-200">{productInfo.category}</p> */}
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={productInfo.image_local} alt="" />
                    </div>
                    <div className="max-w-xl my-3">
                        <div className="mb-5">
                            <p className="font-bold">Category: <span className="ml-2 mb-5 font-semibold text-blue-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">{productInfo.category}</span></p>
                        </div>

                        <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                            <span className="mr-1">$</span>
                            <span className="">{productInfo.price}</span>
                        </p>
                        <p className="my-3">
                            <span>
                                <Rating rating={productInfo.rating} />
                            </span>
                        </p>

                        <p className="my-4 select-none">
                            {productInfo.best_seller && (<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>)}
                            {productInfo.in_stock && (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>)}
                            {!productInfo.in_stock && (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)}
                            {/* <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">5 MB</span> */}
                        </p>

                        <ul>
                            {descriptionList.map((item, index) => (
                                <li className="list-disc" key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="my-5">
                            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800">
                                Add To Bag <i className="ml-1 bi bi-plus-lg"></i>
                            </button>
                            {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

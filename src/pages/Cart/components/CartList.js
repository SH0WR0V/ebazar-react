import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const cartlist = [
        {
            "id": 10001,
            "category": "outdoor",
            "name": "Amplimove Trainer",
            "description": "Reach your peak performance with the adidas Amplimove Trainer for men. Lightweight and cushioned, these shoes provide reliable stability to give you the support you need for all gym training activities. The soft padding keeps your feet comfortable during intense workouts. With their sleek design and timeless muted colour, these trainers also make a statement in any gym setting. Textile and synthetic upper. Lace-up closure. Round-toe silhouette. Textile lining and insole. Rubber outsole",
            "price": 69.95,
            "poster": "",
            "image_local": "/assets/images/10011.jpg",
            "rating": 5,
            "in_stock": true,
            "size": 4,
            "best_seller": true
        },
        {
            "id": 10002,
            "category": "outdoor",
            "name": "Terrex Trailmaker 2",
            "description": "Make your most of outdoor adventures by wearing adidas® Outdoor Terrex Trailmaker 2 shoes. With a lightweight and breathable design, they provide reliable support and cushioning to keep you going. They are made of synthetic/textile upper, textile lining, and removable textile footbed. A rounded toe and lace closure ensures secure fit while EVA midsole provides supportive traction. Rubber outsole",
            "price": 100,
            "poster": "",
            "image_local": "/assets/images/10010.jpg",
            "rating": 3,
            "in_stock": true,
            "size": 4,
            "best_seller": false
        }
    ]
    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold text-gray-700 dark:text-slate-100 my-10">
                    Your Bag (2)
                </p>
            </section>

            <section>
                {cartlist.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold text-gray-700">Total Amount:</span>
                        <span className="text-gray-700">$99</span>
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
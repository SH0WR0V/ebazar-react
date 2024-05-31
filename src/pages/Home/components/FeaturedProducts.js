import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Elements/ProductCard";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json()
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Featured Shoes</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">

          { products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) }

        </div>
    </section>
  )
}
import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.info(error.message, { position: "bottom-center" });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl font-bold text-center text-gray-700 pb-5 capitalize lg:text-3xl dark:text-white">Featured Shoes</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
    </section>
  )
}
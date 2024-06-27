import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";
import Loading from "../../../assets/images/loading2.gif";

export const FeaturedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getFeaturedList();
        setLoading(false);
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
        {loading && <p className="m-auto"><img src={Loading} alt="" /></p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
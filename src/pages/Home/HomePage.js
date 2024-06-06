import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonial } from "./components/Testimonial";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {
  useTitle("Find your perfect pair");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
    </main>
  );
};

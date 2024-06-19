import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-24 mt-10 mx-5 lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold text-slate-700">
          Discover the Best Running Shoes Today!
        </h1>
        <p className="text-2xl my-7 px-1 text-slate-600 dark:text-slate-300">
          Unleash your potential with our premium running shoes. Engineered for
          comfort, speed, and style, find your perfect pair and elevate your run
          today!
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-gray-600 hover:bg-gray-700 focus:gray-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Explore Shoes
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src="assets/images/hero.jpg"
          alt="Adidas Hero Section"
        />
      </div>
    </section>
  );
};

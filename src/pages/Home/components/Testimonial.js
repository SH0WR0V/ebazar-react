import React, { useState } from 'react';


const testimonials = [
  {
    name: 'Mia Brown',
    image: 'assets/images/customer 1.jpg',
    quote: 'Great selection of shoes at reasonable prices. I found the perfect pair of heels for a wedding, and they looked even better in person. My only issue was that the box was slightly damaged upon arrival, but the shoes were in perfect condition. Will definitely shop here again!',
  },
  {
    name: 'John Smith',
    image: 'assets/images/customer 2.jpg',
    quote: 'I absolutely love my new sneakers! The fit is perfect, and they are so comfortable for my daily runs. The delivery was super fast, and the customer service was very helpful when I had questions about sizing. Highly recommend!',
  },
  {
    name: 'Young Dave',
    image: 'assets/images/customer 3.jpg',
    quote: 'Fantastic experience! I ordered a pair of boots, and they exceeded my expectations. The quality is excellent, and they are very stylish. The website is user-friendly, and the checkout process was quick and easy. Plus, they offer free returns, which is a huge plus!',
  }
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-center text-gray-700 capitalize lg:text-3xl dark:text-white">
        What our customers saying
      </h1>
      <div className="container relative w-4/5 mx-auto overflow-hidden flex justify-center items-center">
        <div className="flex items-start max-w-6xl mx-auto">

          <button
            onClick={prevSlide}
            title="left arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="p-6 bg-white text-center ">

            <p className="mb-4 text-lg text-gray-500">"{testimonials[currentIndex].quote}"</p>
            <div className="flex flex-col items-center">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={testimonials[currentIndex].image}
                alt=""
              />
              <h3 className="mt-3 text-lg text-gray-700 font-semibold">{testimonials[currentIndex].name}</h3>
            </div>

          </div>

          <button
            onClick={nextSlide}
            title="right arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>
      </div>
    </section >
  );
};


export const Testimonial = () => {
  const testimonials = [
    {
      "id": 1,
      "review": "Great selection of shoes at reasonable prices. I found the perfect pair of heels for a wedding, and they looked even better in person. My only issue was that the box was slightly damaged upon arrival, but the shoes were in perfect condition. Will definitely shop here again!",
      "name": "Mia Brown",
      "img": ""
    },
    {
      "id": 2,
      "review": "I absolutely love my new sneakers! The fit is perfect, and they are so comfortable for my daily runs. The delivery was super fast, and the customer service was very helpful when I had questions about sizing. Highly recommend!",
      "name": "John Smith",
      "img": ""
    },
    {
      "id": 3,
      "review": "Fantastic experience! I ordered a pair of boots, and they exceeded my expectations. The quality is excellent, and they are very stylish. The website is user-friendly, and the checkout process was quick and easy. Plus, they offer free returns, which is a huge plus!",
      "name": "Young Dave",
      "img": ""
    }
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-3 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-700 capitalize lg:text-3xl dark:text-white">
          What our customers saying
        </h1>

        {/* <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-gray-600 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-gray-600 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
        </div> */}

        <div className="flex items-start max-w-6xl mx-auto mt-10">
          {/* <button
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
          </button> */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <p className="flex items-center text-center text-gray-500 lg:mx-8">
                {`"${testimonial.review}"`}
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}


          {/* <button
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
          </button> */}
        </div>
      </div>
    </section>
  );
};

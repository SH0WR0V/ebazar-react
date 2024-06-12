export const Testimonial = () => {
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
          <button
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

          <div>
            <p className="flex items-center text-center text-gray-500 lg:mx-8">
              I recently purchased a pair of running shoes from this online shop, and I'm thrilled with my experience! The website was easy to navigate, the selection was fantastic, and the prices were competitive. My order arrived quickly and the shoes fit perfectly. The quality is top-notch, and they are incredibly comfortable. I highly recommend this store for anyone looking for great shoes and excellent service!
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Mia Brown
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Marketer
                </span>
              </div>
            </div>
          </div>

          <button
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
    </section>
  );
};

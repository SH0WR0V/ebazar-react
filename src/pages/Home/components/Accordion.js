import { useState } from "react";

export const Accordion = ({ faq }) => {
  const { question, answer } = faq;
  const [show, setShow] = useState(false);

  return (
    <div className="mt-2 space-y-8 lg:mt-4">
      <div className="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
        <button
          onClick={() => setShow(!show)}
          className="flex items-center justify-between w-full"
        >
          <h1 className="font-medium text-gray-700 dark:text-white">
            {question}
          </h1>

          <span className="text-gray-400 bg-gray-200 rounded-full">
            {!show && (
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {show && (
              <svg
                data-accordion-icon
                className="rotate-180 w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </span>
        </button>
        {show && (
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

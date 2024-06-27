import { Accordion } from "./Accordion";

export const Faq = () => {

  const faqs = [
    {
      "id": 1,
      "question": "What is your return policy?",
      "answer": "We offer a 30-day return policy for unworn shoes in their original packaging. If you are not completely satisfied with your purchase, you can return the shoes within 30 days of the delivery date for a full refund or exchange. Please ensure the shoes are in their original condition and include the original receipt or proof of purchase."
    },
    {
      "id": 2,
      "question": "How do I determine the right shoe size?",
      "answer": "To determine the right shoe size, we recommend using our size guide, which can be found on each product page. Measure your foot length and width, and compare your measurements to our size chart to find the perfect fit. If you are between sizes, we suggest ordering the larger size for a more comfortable fit. If you need further assistance, our customer service team is available to help."
    },
    {
      "id": 3,
      "question": "How long does shipping take?",
      "answer": "Shipping times vary depending on your location. Standard shipping typically takes 5-7 business days, while expedited shipping options are available for faster delivery. Once your order is processed, you will receive a confirmation email with tracking information so you can monitor the delivery status. Please note that international shipping may take longer due to customs processing times."
    },
    {
      "id": 4,
      "question": "Do you offer international shipping?",
      "answer": "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on the destination. At checkout, you can select your country to view the available shipping options and associated costs. Please be aware that international orders may be subject to customs duties and taxes, which are the responsibility of the customer."
    }
  ];

  return (
    <section className="m-10 p-7 dark:border-slate-700">
      <h1 className="text-2xl text-center font-semibold text-slate-700 capitalize lg:text-3xl dark:text-slate-100 pb-10">Questions in mind?</h1>
      <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  )
}
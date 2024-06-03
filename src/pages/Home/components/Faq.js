import { Accordion } from "./Accordion";

export const Faq = () => {

  const faqs = [
    {
      "id": 1,
      "question": "Why should I use CodeBook?",
      "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
    },
    {
      "id": 2,
      "question": "Can I access my eBook on mobile?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
    },
    {
      "id": 3,
      "question": "Do you offer refunds?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    },
    {
      "id": 4,
      "question": "Do you support Internation payments?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    }
  ];

  return (
    <section className="m-10 p-7 dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold text-slate-700 capitalize lg:text-3xl dark:text-slate-100 pb-10">Questions in mind?</h1>
      <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  )
}
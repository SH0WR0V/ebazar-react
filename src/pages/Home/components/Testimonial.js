export const Testimonial = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5">Customers About Our Shoes</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Walking on Clouds!</h3>
                      <p className="my-4 font-light">"I recently purchased a pair of shoes from this online store, and I must say, they are the most comfortable shoes I’ve ever worn. The cushioning is perfect, and it feels like I’m walking on clouds. The design is sleek and goes well with both casual and formal wear. Highly recommend!"</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Bonnie Green</div>
                          
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stylish and Durable!</h3>
                      <p className="my-4 font-light">"These shoes are not only stylish but also incredibly durable. I’ve worn them on various terrains, and they’ve held up beautifully. The attention to detail in the craftsmanship is evident, and I’ve received numerous compliments. A definite five-star product!"</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Roberta Casas</div>
                          
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exceptional Customer Service!</h3>
                      <p className="my-4 font-light">"What impressed me the most was the exceptional customer service. The team was very responsive and helped me choose the right size. The delivery was prompt, and the packaging was top-notch. It’s refreshing to see a brand that cares about its customers’ experience."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Jese Leos</div>
                          
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Perfect Fit for the Fitness Enthusiast!</h3>
                      <p className="my-4 font-light">"As someone who’s very active, finding the right pair of shoes is crucial. These shoes provide excellent support and flexibility for my workouts. They’re breathable, lightweight, and the non-slip sole is a game-changer. I’m beyond satisfied with my purchase."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Joseph McFall</div>
                          
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </section>
    )
  }
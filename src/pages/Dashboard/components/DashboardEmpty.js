import { Link } from "react-router-dom"

export const DashboardEmpty = () => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
            <div className="my-5">
                <p className="bi bi-truck text-green-600 text-7xl mb-5"></p>
                <p>Oops! Your order dashboard looks empty!</p>
                <p>Add shoes to your bag from our store collection.</p>
            </div>
            <div className="my-10">
                <Link to="/products" type="button" className="text-white bg-gray-600 hover:bg-gray-700 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-bag"></i></Link>
            </div>
        </section>
    )
}

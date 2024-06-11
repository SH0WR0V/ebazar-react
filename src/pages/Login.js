import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    async function handleLogin(event) {
        event.preventDefault();
        const authDetail = {
            email: email.current.value,
            password: password.current.value
        }

        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(authDetail)
        });

        const data = await response.json();
        data.accessToken ? navigate('/products') : toast.error(data);

        if (data.accessToken) {
            sessionStorage.setItem('token', JSON.stringify(data.accessToken));
            sessionStorage.setItem('skid', JSON.stringify(data.user.id));
            toast.success('Login successful');
        }
    }

    return (
        <main>
            <div className="w-80 m-auto">
                <section>
                    <p className="text-2xl text-center font-semibold text-gray-700 dark:text-slate-100 mt-10 mb-5">Login</p>
                </section>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
                        <input type="email" ref={email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shahriar@example.com" required autoComplete="off" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your password</label>
                        <input type="password" ref={password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                </form>
                {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
            </div>
        </main>
    )
}
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({ setSearchSection }) => {
    const navigate = useNavigate();
    const searchRef = useRef();

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchSection(false);
        navigate(`/products?q=${searchRef.current.value}`);
    }

    return (
        <div className="absolute top-9 right-0 z-10 w-64 select-none">
            <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                    <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
                    <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" required="" />
                </div>
            </form>
        </div>
    )
}
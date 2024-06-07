import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";


export const Header = () => {
  const [darkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-2 h-10" alt="Sneakers Logo" />
            <span className="self-center text-xl text-gray-700 font-semibold whitespace-nowrap dark:text-gray-300 dark:hover:text-white">
              Sneakers
            </span>
          </Link>
          <div className="flex items-center relative">
            {/* <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span> */}
            <span onClick={() => setSearchSection(!searchSection)} className="relative cursor-pointer text-xl text-gray-600 hover:text-gray-900 dark:hover:text-white mr-5 bi bi-search"></span>
            {searchSection && <Search setSearchSection={setSearchSection} />}
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 dark:hover:text-white mr-5">
              <span className="text-2xl bi bi-bag-check relative">
                <span className="text-white text-sm absolute -top-1.5 left-3 bg-orange-600 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span onMouseEnter={() => setDropDown(true)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-600 hover:text-gray-900 dark:hover:text-white"></span>
            {dropDown && <DropdownLoggedOut setDropDown={setDropDown} />}
          </div>
        </div>
      </nav>

    </header>
  );
};

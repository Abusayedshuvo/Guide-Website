import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
        <button
          id="hs-mega-menu-basic-dr"
          type="button"
          className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
        >
          Dropdown
          <svg
            className="ml-2 w-2.5 h-2.5 text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              //   stroke-width="2"
              //   stroke-linecap="round"
            ></path>
          </svg>
        </button>

        <div className="top-24 hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-top-5 before:left-0 before:w-full before:h-5">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            My Services
          </Link>
          <Link
            to="/add-services"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Add Services
          </Link>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            to="/manage-services"
          >
            Manage Services
          </Link>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            My Schedules
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

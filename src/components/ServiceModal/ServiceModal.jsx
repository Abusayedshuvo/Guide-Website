import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { FaXmark } from "react-icons/fa6";

const ServiceModal = ({ service }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProvider,
    price,
  } = service;
  return (
    <>
      <div
        id="hs-focus-management-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Purchase the Service
              </h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
              >
                <span className="sr-only">Close</span>
                <FaXmark />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <input
                type="text"
                name="name"
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                defaultValue={serviceName}
                disabled
              />
              <input
                type="text"
                name="servicePhoto"
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                defaultValue={serviceImage}
                disabled
              />

              <input
                type="email"
                name="email"
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;

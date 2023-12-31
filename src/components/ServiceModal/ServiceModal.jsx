import { FaXmark } from "react-icons/fa6";
import { PropTypes } from "prop-types";
import useAxios from "../../Hook/useAxios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ServiceModal = ({ service }) => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const {
    serviceName,
    serviceImage,
    userEmail: authorEmail,
    price,
    area,
  } = service;
  const handleBook = () => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const price = form.price.value;
    const area = form.area.value;
    const date = form.date.value || "";
    const bookServices = {
      serviceName,
      serviceImage,
      userName,
      userEmail,
      price,
      area,
      date,
      authorEmail,
    };

    axios
      .post("/book", bookServices)
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire("Service Book Successful!", "", "success");

          form.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div
        id="hs-medium-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Purchase the Service
              </h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-medium-modal"
              >
                <span className="sr-only">Close</span>
                <FaXmark />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form onSubmit={handleBook}>
                <input
                  type="text"
                  name="serviceName"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  defaultValue={serviceName}
                  disabled
                />
                <input
                  type="text"
                  name="serviceImage"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  defaultValue={serviceImage}
                  disabled
                />

                <input
                  type="text"
                  name="userName"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  defaultValue={displayName}
                  disabled
                />
                <input
                  type="email"
                  name="userEmail"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  placeholder="Email"
                  defaultValue={email}
                  disabled
                />
                <input
                  type="text"
                  name="price"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  placeholder="Price"
                  defaultValue={price}
                  disabled
                />

                <input
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  type="date"
                  name="date"
                />
                <input
                  type="text"
                  name="area"
                  className="py-4 px-4 block w-full bg-slate-100 mb-5"
                  placeholder="Area"
                  defaultValue={area}
                />
                <input
                  className="btn"
                  type="submit"
                  value="Purchase this Service"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;

ServiceModal.propTypes = {
  service: PropTypes.object,
};

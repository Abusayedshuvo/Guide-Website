import { useLoaderData } from "react-router-dom";
import ServiceModal from "../components/ServiceModal/ServiceModal";

const ServiceDetails = () => {
  const service = useLoaderData();
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProvider,
    price,
  } = service;

  return (
    <>
      <div className="m-container">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-8">
            <p className="text-4xl mb-10 font-bold">Services Details</p>
            <img className="rounded-t-lg" src={serviceImage} alt="" />
            <div className="border-2 border-t-0 p-6 rounded-b-lg grid grid-cols-3 justify-between gap-4">
              <div className="col-span-2 space-y-2">
                <p className="text-2xl text-primary font-bold">
                  Price: {price}
                </p>
                <p className="text-2xl font-semibold">{serviceName}</p>
                <p>{serviceDescription}</p>
                <button
                  data-hs-overlay="#hs-focus-management-modal"
                  className="bg-primary text-white px-4 py-2 rounded-lg inline-block font-semibold"
                >
                  Book Now
                </button>
              </div>
              <div className="border-l-2 col-span-1 pl-5">
                <p className="text-xl font-bold">Service Provider</p>
                <p className="font-bold mb-4">{serviceProvider.name}</p>
                <img
                  className="w-20 h-20 rounded-lg"
                  src={serviceProvider.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-2xl font-bold">Service Provider Details</p>
          </div>
        </div>
      </div>
      <ServiceModal service={service}> </ServiceModal>
    </>
  );
};

export default ServiceDetails;

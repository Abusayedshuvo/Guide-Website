import { useLoaderData } from "react-router-dom";
import ServiceModal from "../components/ServiceModal/ServiceModal";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(Object.keys(service).join(","));
  const {
    serviceName,
    serviceImage,
    userName,
    userPhoto,
    price,
    area,
    serviceDescription,
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
                  data-hs-overlay="#hs-medium-modal"
                  className="bg-primary text-white px-4 py-2 rounded-lg inline-block font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-right pl-5">
              <p className="text-4xl font-bold mb-10">Service Provider</p>
              <img className="w-32 rounded-lg ml-auto" src={userPhoto} alt="" />
              <p className="font-bold mt-4 text-2xl">{userName}</p>
              <p className="font-bold mt-4 text-2xl">Service Area: {area}</p>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal service={service}> </ServiceModal>
    </>
  );
};

export default ServiceDetails;

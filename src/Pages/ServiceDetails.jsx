import { Link, useLoaderData } from "react-router-dom";
import ServiceModal from "../components/ServiceModal/ServiceModal";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxios from "../Hook/useAxios";
import Loading from "../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const myServices = async () => {
    const res = await axios.get(`/my-services/${user.email}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["services-details"],
    queryFn: myServices,
    refetchInterval: 2,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
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
      <Helmet>
        <title>Guide Nook | Services Details</title>
      </Helmet>
      <div className="bg-primary/10 py-1">
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
                <img
                  className="w-32 rounded-lg ml-auto"
                  src={userPhoto}
                  alt=""
                />
                <p className="font-bold mt-4 text-2xl">{userName}</p>
                <p className="font-bold mt-4 text-2xl">Service Area: {area}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal service={service}> </ServiceModal>

      {data?.data?.length > 0 ? (
        <>
          <div className="m-container">
            <p className="text-4xl font-bold mb-10">Other Services</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {data?.data?.slice(0, 3).map((item) => (
                <div key={item._id}>
                  <img
                    className="rounded-t-lg"
                    src={item.serviceImage}
                    alt=""
                  />
                  <p className="text-2xl text-primary font-bold pt-5">
                    Price: {item.price}
                  </p>
                  <p className="text-2xl font-semibold">{serviceName}</p>
                  <p>{item.serviceDescription}</p>

                  <Link to={`/services/${item._id}`} className="btn mt-5">
                    View Detail
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ServiceDetails;

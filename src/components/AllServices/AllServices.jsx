import { PropTypes } from "prop-types";

const AllServices = ({ service }) => {
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    viewDetailButton,
    serviceProvider,
    price,
    serviceArea,
  } = service;
  return (
    <div className="flex mb-10">
      <div className="flex-1">
        <img className="rounded-l-lg" src={serviceImage} alt="" />
      </div>
      <div className="flex-1 border-2 border-primary pl-10 py-4 border-l-0 rounded-r-lg">
        <div className="space-y-1">
          <p className="text-2xl text-primary font-bold">Price: {price}</p>
          <p className="text-2xl font-semibold">{serviceName}</p>
          <p>{serviceDescription}</p>
        </div>
        <div className="my-8">
          <p className="text-2xl font-bold">Service Provider</p>
          <p>
            <span className="font-bold "> Provider Name: </span>
            {serviceProvider.name}
          </p>
          <p className=" mb-4">
            <span className="font-bold">Service Area :</span> {serviceArea}
          </p>
          <img
            className="w-20 h-20 rounded-lg"
            src={serviceProvider.image}
            alt=""
          />
        </div>
        <button className="btn">{viewDetailButton}</button>
      </div>
    </div>
  );
};

AllServices.propTypes = {
  service: PropTypes.object,
};
export default AllServices;

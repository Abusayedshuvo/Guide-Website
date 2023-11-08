import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const AllServices = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    userPhoto,
    userName,
    price,
    serviceArea,
  } = service;
  return (
    <div className="lg:flex mb-10">
      <div className="flex-1">
        <img className="rounded-l-lg" src={serviceImage} alt="" />
      </div>
      <div className="flex-1 border-2 border-primary pl-10 py-4 lg:border-l-0 lg:rounded-r-lg lg:rounded-none rounded-lg">
        <div className="space-y-1">
          <p className="text-2xl text-primary font-bold">Price: {price}</p>
          <p className="text-2xl font-semibold">{serviceName}</p>
          <p>{serviceDescription}</p>
        </div>
        <div className="my-8">
          <p className="text-2xl font-bold">Service Provider</p>
          <p>
            <span className="font-bold "> Provider Name: </span>
            {userName}
          </p>
          <p className=" mb-4">
            <span className="font-bold">Service Area :</span> {serviceArea}
          </p>
          <img className="w-20 h-20 rounded-lg" src={userPhoto} alt="" />
        </div>
        <Link to={`/services/${_id}`} className="btn">
          View Detail
        </Link>
      </div>
    </div>
  );
};

AllServices.propTypes = {
  service: PropTypes.object,
};
export default AllServices;

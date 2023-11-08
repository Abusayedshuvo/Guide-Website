import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const SingleServices = ({ item }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProvider,
    price,
  } = item;

  return (
    <div>
      <img className="rounded-t-lg" src={serviceImage} alt="" />
      <div className="border-2 border-t-0 p-6 rounded-b-lg flex justify-between gap-4">
        <div className="space-y-2">
          <p className="text-2xl text-primary font-bold">Price: {price}</p>
          <p className="text-2xl font-semibold">{serviceName}</p>
          <p>{serviceDescription}</p>
          <Link to={`/services/${_id}`} className="btn">
            View Detail
          </Link>
        </div>
        <div className="border-l-2 flex-1 pl-5">
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
  );
};

SingleServices.propTypes = {
  item: PropTypes.object,
};
export default SingleServices;

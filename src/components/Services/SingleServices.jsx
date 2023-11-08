import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleServices = ({ item }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    userName,
    userPhoto,
    price,
    serviceDescription,
  } = item;
  return (
    <div>
      <div className="overflow-hidden rounded-t-lg">
        <motion.button
          className="rounded-t-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img className="rounded-t-lg" src={serviceImage} alt="" />
        </motion.button>
      </div>

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
          <p className="font-bold mb-4">{userName}</p>
          {userPhoto ? (
            <img className="w-20 h-20 rounded-lg" src={userPhoto} alt="" />
          ) : (
            <> </>
          )}
        </div>
      </div>
    </div>
  );
};

SingleServices.propTypes = {
  item: PropTypes.object,
};
export default SingleServices;

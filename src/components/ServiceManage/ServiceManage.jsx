import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ServiceManage = ({ item, handleDelete }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    price,
    userName,
    userPhoto,
  } = item;

  return (
    <>
      <div>
        <img className="rounded-t-lg" src={serviceImage} alt="" />
        <div className="border-2 border-t-0 p-6 rounded-b-lg flex justify-between gap-4">
          <div className="space-y-2 flex-1">
            <p className="text-2xl text-primary font-bold">Price: {price}</p>
            <p className="text-2xl font-semibold">{serviceName}</p>
            <p>{serviceDescription}</p>
            <Link to={`/update/${_id}`} className="btn">
              Update
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn ml-5">
              Delete
            </button>
          </div>
          <div className="border-l-2 flex-1 pl-5">
            <p className="text-xl font-bold">Service Provider</p>
            <p className="font-bold mb-4">{userName}</p>
            <img className="w-20 h-20 rounded-lg" src={userPhoto} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceManage;

ServiceManage.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
};

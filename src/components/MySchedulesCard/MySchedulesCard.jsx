import { PropTypes } from "prop-types";

const MySchedulesCard = ({ item }) => {
  const { serviceName, serviceImage, price, serviceDescription } = item;
  return (
    <>
      <div>
        <img className="rounded-t-lg" src={serviceImage} alt="" />
        <div className="border-2 border-t-0 p-6 rounded-b-lg flex justify-between gap-4">
          <div className="space-y-2">
            <p className="text-2xl text-primary font-bold">Price: {price}</p>
            <p className="text-2xl font-semibold">{serviceName}</p>
            <p>{serviceDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

MySchedulesCard.propTypes = {
  item: PropTypes.object,
};
export default MySchedulesCard;

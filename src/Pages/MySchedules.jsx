import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxios from "../Hook/useAxios";
import Loading from "../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import SingleServices from "../components/Services/SingleServices";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const myBook = async () => {
    const res = await axios.get(`/book/${user.email}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["my-services"],
    queryFn: myBook,
    // refetchInterval: 2,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Breadcrumb title="My Schedules"></Breadcrumb>

      {data.data.length > 0 ? (
        <>
          <div className="m-container">
            <p className="text-4xl font-bold">My Bookings</p>

            <div className="grid lg:grid-cols-3 gap-6 mt-14">
              {data?.data?.map((item) => (
                <SingleServices key={item._id} item={item}></SingleServices>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="m-container text-center">
            <div className="shadow-lg p-10 rounded-lg">
              <p className="text-6xl text-primary">You Have No Bookings</p>
              <p className="text-4xl my-4">Kindly Book a Services</p>
              <Link to="/services" className="btn">
                All Services
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="m-container">
        <p className="text-4xl font-bold">My Pending Work</p>
      </div>
    </>
  );
};

export default MySchedules;
import useAxios from "../../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import SingleServices from "./SingleServices";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Services = () => {
  const axios = useAxios();
  const getServices = async () => {
    const res = await axios.get("/services");
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto lg:px-20 my-20">
      <p className="text-4xl text-center font-bold">Popular Services</p>
      <hr className="border-primary border-b-4 w-20 mx-auto my-4" />

      <div className="grid lg:grid-cols-2 gap-6 mt-14">
        {data?.data?.map((item) => (
          <SingleServices key={item._id} item={item}></SingleServices>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/" className="btn w-1/3">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Services;

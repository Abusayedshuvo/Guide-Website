import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";
import Loading from "../components/Loading/Loading";
import AllServices from "../components/AllServices/AllServices";

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
    <div className="m-container">
      {data?.data?.map((service) => (
        <AllServices key={service._id} service={service}></AllServices>
      ))}
      <div className="text-center">
        <button className="btn w-1/3 mt-10">Visit More</button>
      </div>
    </div>
  );
};

export default Services;

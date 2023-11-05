import useAxios from "../../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";
import SingleServices from "./SingleServices";
import { Link } from "react-router-dom";

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
    return (
      <>
        <div className="text-center mx-auto h-screen fixed top-0 left-0 right-0 z-50 bg-white flex justify-center items-center">
          <motion.button whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
            <Lottie animationData={loading} loop={true} />;
          </motion.button>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto lg:px-20 my-20">
      <p className="text-4xl text-center font-bold">Popular Services</p>
      <hr className="border-primary border-b-4 w-20 mx-auto my-4" />

      <div className="grid lg:grid-cols-2 gap-8 mt-14">
        {data?.data?.map((item) => (
          <SingleServices key={item._id} item={item}></SingleServices>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/"
          className="bg-primary text-white w-1/3 text-center py-3 rounded-lg inline-block font-semibold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Services;

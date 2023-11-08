import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxios from "../Hook/useAxios";
import Loading from "../components/Loading/Loading";
import ServiceManage from "../components/ServiceManage/ServiceManage";
import { Helmet } from "react-helmet";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const myServices = async () => {
    const res = await axios.get(`/my-services/${user.email}`, {
      withCredentials: true,
    });
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["my-services"],
    queryFn: myServices,
    refetchInterval: 2,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    axios
      .delete(`/services-all/${id}`, id)
      .then((data) => {
        console.log(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Guide Nook | Manage Services</title>
      </Helmet>
      <Breadcrumb title="Manage Services"></Breadcrumb>
      <div className="m-container grid lg:grid-cols-2 gap-6 mt-14">
        {data?.data?.map((item) => (
          <ServiceManage
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          ></ServiceManage>
        ))}
      </div>
    </>
  );
};

export default ManageServices;

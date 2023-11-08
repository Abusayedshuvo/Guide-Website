import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAxios from "../../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const PendingWork = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const booking = async () => {
    const res = await axios.get(`/pending/${user.email}`, {
      withCredentials: true,
    });
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["my-services"],
    queryFn: booking,
    // refetchInterval: 2,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data?.data);

  return (
    <>
      {data?.data?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {data?.data?.map((item) => (
              <div key={item._id}>
                <img src={item?.serviceImage} alt="" />
                <p className="text-2xl pt-5">{item?.serviceName}</p>
                <p className="text-2xl pt-2">Price: {item?.price}</p>
                <p>Author Email: {item?.authorEmail}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="m-container text-center">
            <div className="shadow-lg p-10 rounded-lg">
              <p className="text-6xl text-primary">You Have No Pending Work</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PendingWork;

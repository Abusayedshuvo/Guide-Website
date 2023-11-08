import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";
import Loading from "../components/Loading/Loading";
import AllServices from "../components/AllServices/AllServices";
import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import { Helmet } from "react-helmet";

// import Swal from "sweetalert2";

const Services = () => {
  const axios = useAxios();
  const [services, setServices] = useState([]);
  const [number, setNumber] = useState(6);
  const [search, setSearch] = useState("");
  const handleService = () => {
    setNumber(0);
    const button = document.getElementById("button");
    button.classList.add("hidden");
  };
  const getServices = async () => {
    const res = await axios.get(`/services-all?limit=${number}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    refetchInterval: 2,
  });

  useEffect(() => {
    if (search) {
      data.data = data.data.filter((item) =>
        item.serviceName.toLowerCase().includes(search.toLowerCase())
      );
    }
    setServices(data);
  }, [data, search]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search-field");
    setSearch(searchInput.value);
  };

  return (
    <>
      <Helmet>
        <title>Guide Nook | All Services</title>
      </Helmet>
      <Search handleSearch={handleSearch}></Search>
      <div className="m-container">
        {services?.data?.length > 0 ? (
          <>
            {services?.data?.map((service) => (
              <AllServices key={service._id} service={service}></AllServices>
            ))}
          </>
        ) : (
          <>
            <p className="text-4xl text-center">
              No Service Available on this name
            </p>
          </>
        )}

        <div className={`${data.data.length < 6 ? "hidden" : "text-center"}`}>
          <button
            id="button"
            onClick={handleService}
            className="btn lg:w-1/3 mt-10"
          >
            Visit More
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;

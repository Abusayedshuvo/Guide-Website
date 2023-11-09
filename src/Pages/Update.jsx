import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const axios = useAxios();
  const myServices = async () => {
    const res = await axios.get(`/services/${id}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["update"],
    queryFn: myServices,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const {
    _id,
    serviceName,
    serviceImage,
    userName,
    userEmail,
    userPhoto,
    price,
    area,
    serviceDescription,
  } = data.data;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPhoto = form.userPhoto.value;
    const price = form.price.value;
    const area = form.area.value;
    const serviceDescription = form.description.value;
    const updateServices = {
      serviceName,
      serviceImage,
      userName,
      userEmail,
      userPhoto,
      price,
      area,
      serviceDescription,
    };

    axios
      .put(`/services/${_id}`, updateServices)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire("Services Update Successful!", "", "success");
          form.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Guide Nook |Update Services</title>
      </Helmet>
      <Breadcrumb title={"Update Your Service"}></Breadcrumb>
      <div className="m-container mt-5">
        <form onSubmit={handleUpdate}>
          <div className="lg:grid lg:grid-cols-2 gap-6 shadow-2xl p-10 rounded-lg">
            <p className="text-4xl font-bold text-primary text-center col-span-2 mb-5">
              Update Services
            </p>
            <input
              type="text"
              name="serviceName"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Service Name"
              defaultValue={serviceName}
            />
            <input
              type="text"
              name="serviceImage"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Photo URL"
              defaultValue={serviceImage}
            />
            <input
              type="text"
              name="name"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Your Name"
              defaultValue={userName}
              disabled
            />
            <input
              type="email"
              name="email"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Your Email"
              defaultValue={userEmail}
              disabled
            />
            <input
              type="url"
              name="userPhoto"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Your Photo"
              defaultValue={userPhoto}
              disabled
            />
            <input
              type="text"
              name="price"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Price"
              defaultValue={price}
            />
            <input
              type="text"
              name="area"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Service Area"
              defaultValue={area}
            />
            <textarea
              type="text"
              name="description"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Description"
              defaultValue={serviceDescription}
            />
            <div className="col-span-2 text-center">
              <input
                className="btn lg:w-1/3"
                type="submit"
                value="Update Services"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;

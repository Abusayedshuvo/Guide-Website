import { useContext } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { AuthContext } from "../context/AuthProvider";
import useAxios from "../Hook/useAxios";

const AddServices = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const { displayName, email: userEmail, photoURL } = user;
  const handleAdd = (event) => {
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
    const addServices = {
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
      .post("/services", addServices)
      .then((data) => {
        console.log(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Breadcrumb title={"Add Services"}> </Breadcrumb>
      <div className="m-container mt-5">
        <form onSubmit={handleAdd}>
          <div className="grid grid-cols-2 gap-6 shadow-2xl p-10 rounded-lg">
            <p className="text-4xl font-bold text-primary text-center col-span-2 mb-5">
              Add Services
            </p>
            <input
              type="text"
              name="serviceName"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Service Name"
            />
            <input
              type="text"
              name="serviceImage"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Photo URL"
            />
            <input
              type="text"
              name="name"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Your Name"
              defaultValue={displayName}
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
              defaultValue={photoURL}
              disabled
            />
            <input
              type="text"
              name="price"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Price"
            />
            <input
              type="text"
              name="area"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Service Area"
            />
            <textarea
              type="text"
              name="description"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Description"
            />
            <div className="col-span-2 text-center">
              <input
                className="btn lg:w-1/3"
                type="submit"
                value="Add Services"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddServices;

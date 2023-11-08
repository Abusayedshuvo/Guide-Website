import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginImg from "../assets/login.json";

const Contact = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const comment = form.comment.value;
    const contactInfo = { email, name, comment };
    axios
      .post("/contact", contactInfo)
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire("Product Added Successful!", "", "success");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Guide Nook | Contact Us</title>
      </Helmet>
      <Breadcrumb title="Contact Us"></Breadcrumb>
      <div className="m-container">
        <div className="lg:grid grid-cols-2 items-center">
          <div className="">
            <form onSubmit={handleForm}>
              <input
                type="text"
                name="name"
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                placeholder="Your Name"
                defaultValue={user?.displayName}
              />
              <input
                type="email"
                name="email"
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                placeholder="Email"
                defaultValue={user?.email}
              />
              <textarea
                className="py-4 px-4 block w-full bg-slate-100 mb-5"
                name="comment"
                id=""
                cols="10"
                rows="5"
                placeholder="Comment"
              ></textarea>
              <div className="text-center">
                <input
                  className="cursor-pointer inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div className="">
            <Lottie animationData={loginImg} loop={true} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

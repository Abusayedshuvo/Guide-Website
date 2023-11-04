import Lottie from "lottie-react";
import loginImg from "../assets/login.json";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 items-center">
        <div className="shadow-xl p-10 rounded-lg">
          <p className="text-4xl  font-semibold mb-10 text-center">
            Create your account
          </p>
          <form>
            <input
              type="text"
              name="name"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Password"
            />
            <input
              type="text"
              name="photo"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Photo URL"
            />
            <div className="text-center">
              <input
                className="inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="mt-5 text-center">
            Already a member?
            <Link
              className="text-yellow font-bold pl-2 text-primary"
              to="/login"
            >
              Login here
            </Link>
          </p>
        </div>
        <div>
          <Lottie animationData={loginImg} loop={true} />;
        </div>
      </div>
    </>
  );
};

export default Registration;

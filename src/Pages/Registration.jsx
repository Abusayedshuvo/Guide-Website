import Lottie from "lottie-react";
import loginImg from "../assets/login.json";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 items-center">
        <div className="shadow-xl p-10 rounded-lg">
          <p className="text-2xl  font-semibold mb-4">Create your account</p>
          <form>
            <input
              type="email"
              className="py-4 px-4 block w-full bg-slate-100 mb-5"
              placeholder="Email"
            />
            <input
              type="password"
              className="py-4 px-4 block w-full bg-slate-100"
              placeholder="Password"
            />
          </form>
          <p className="mt-5">
            Don't have an account?
            <Link className="text-yellow font-semibold" to="/registration">
              Register here
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

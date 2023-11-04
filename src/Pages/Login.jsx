import Lottie from "lottie-react";
import loginImg from "../assets/login.json";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center gap-5">
      <div className="shadow-xl p-10 rounded-lg">
        <p className="text-4xl  font-semibold mb-10 text-center">
          Login to your account
        </p>
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
        <div className="text-center">
          <p className="mt-5">
            Don't have an account?
            <Link className="text-yellow font-semibold pl-2" to="/registration">
              Register here
            </Link>
          </p>
          <p className="my-5">Or Login With</p>

          <div className="space-x-4">
            <button
              // onClick={handleGoogle}
              className="p-4 inline-flex items-center gap-4 rounded-lg font-semibold bg-[#EA4335] hover:text-[#EA4335] text-white capitalize"
            >
              <FaGoogle /> Google
            </button>
            <button
              // onClick={handleGithub}
              className="p-4 inline-flex items-center gap-4 rounded-lg font-semibold bg-[#333] hover:text-[#333] text-white capitalize"
            >
              <FaGithub /> Github
            </button>
          </div>
        </div>
      </div>
      <div>
        <Lottie animationData={loginImg} loop={true} />;
      </div>
    </div>
  );
};

export default Login;

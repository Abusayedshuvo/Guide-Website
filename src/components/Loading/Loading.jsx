import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

const Loading = () => {
  return (
    <>
      <div className="text-center mx-auto h-screen fixed top-0 left-0 right-0 z-50 bg-white flex justify-center items-center">
        <motion.button whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
          <Lottie animationData={loading} loop={true} />;
        </motion.button>
      </div>
    </>
  );
};

export default Loading;

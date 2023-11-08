import aboutImg from "../../assets/about.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="container mx-auto lg:px-20 my-20 lg:flex gap-10 items-center">
      <div className="flex-1 mb-10 lg:mb-0">
        <p className="text-4xl font-bold">
          Our Journey with
          <Typewriter words={[" Guide Nook"]} loop={5} />
        </p>
        <hr className="border-primary border-b-4 w-20 my-4" />

        <p className="my-5">
          At Guide Nook, we are passionate about creating unforgettable travel
          experiences. With a team of dedicated and knowledgeable local guides,
          we aim to redefine the way you explore and connect with new places.
          Our mission is to blend adventure with insight, providing you with a
          deeper understanding of the destinations you visit. Join us on a
          journey of discovery, where every step tells a story, and every
          adventure leaves a lasting impression.
        </p>
        <p>
          At Guide Nook, our story unfolds in the intricate tapestry of travel,
          woven with threads of passion, exploration, and local wisdom. We don't
          just guide; we curate experiences that linger in your memory,
          transforming each journey into a chapter of your personal adventure
          novel.
        </p>
        <button className="btn mt-10">Learn More</button>
      </div>
      <div className="flex-1 overflow-hidden rounded-lg">
        <motion.button
          className="rounded-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img className="rounded-lg" src={aboutImg} alt="" />
        </motion.button>
      </div>
    </div>
  );
};

export default About;

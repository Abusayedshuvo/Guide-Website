import { Link } from "react-router-dom";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import moment from "moment/moment";

const Blog = () => {
  return (
    <div className="m-container">
      <p className="text-4xl text-center font-bold">Our Blog</p>
      <hr className="border-primary border-b-4 w-20 mx-auto my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        <div>
          <img className=" rounded-t-lg" src={blog1} alt="" />
          <div className="bg-primary/10 p-4 rounded-b-lg">
            <p className="text-primary mb-3 font-semibold">
              {moment().format("MMMM D, YYYY")}
            </p>
            <p className="text-2xl font-bold mb-4">
              Unveiling Hidden Gems: A Local's Guide to Offbeat Destinations
            </p>
            <p className="mb-4">
              Embark on a journey beyond the tourist hotspots. Discover the
              charm of lesser-known destinations through the eyes of our local
              guides. Uncover hidden gems, cultural delights, and authentic
              experiences that often escape the travel brochures.
            </p>
            <Link className="text-primary underline font-bold uppercase">
              Read More
            </Link>
          </div>
        </div>
        <div>
          <img className=" rounded-t-lg" src={blog2} alt="" />
          <div className="bg-primary/10 p-4 rounded-b-lg">
            <p className="text-primary mb-3 font-semibold">
              {moment().format("MMMM D, YYYY")}
            </p>
            <p className="text-2xl font-bold mb-4">
              Culinary Chronicles: A Tasty Expedition Around the World
            </p>
            <p className="mb-4">
              Join us on a mouth-watering adventure as we explore the diverse
              and delicious world of global cuisine. From street food delights
              to fine dining experiences, our culinary journey will tantalize
              your taste buds and inspire your next gastronomic escapade.
            </p>
            <Link className="text-primary underline font-bold uppercase">
              Read More
            </Link>
          </div>
        </div>
        <div>
          <img className=" rounded-t-lg" src={blog3} alt="" />
          <div className="bg-primary/10 p-4 rounded-b-lg">
            <p className="text-primary mb-3 font-semibold">
              {moment().format("MMMM D, YYYY")}
            </p>
            <p className="text-2xl font-bold mb-4">
              A Walk Through History: Exploring Ancient Wonders
            </p>
            <p className="mb-4">
              Step back in time with our expert guides as we unravel the stories
              etched in the ancient landscapes. From archaeological wonders to
              historical masterpieces, this blog series is a virtual time-travel
              experience that brings the past to life.
            </p>
            <Link className="text-primary underline font-bold uppercase">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

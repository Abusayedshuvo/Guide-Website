// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="slider-1 flex justify-center items-center bg-blend-overlay h-[80vh] "
            style={{
              background: `rgb(0 0 0 / 60%) url(${slide1}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center text-white space-y-8">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Discover Hidden Gems
              </h2>
              <p className="text-2xl lg:text-4xl">
                Explore Uncharted Territories with Local Guides
              </p>
              <button className="bg-primary text-white px-6 py-4 rounded-lg inline-block font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-1 flex justify-center items-center bg-blend-overlay h-[80vh] "
            style={{
              background: `rgb(0 0 0 / 60%) url(${slide2}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center text-white space-y-8">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Cultural Journeys Await
              </h2>
              <p className="text-2xl lg:text-4xl">
                Immerse Yourself in Rich Histories and Vibrant Traditions
              </p>
              <button className="bg-primary text-white px-6 py-4 rounded-lg inline-block font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-1 flex justify-center items-center bg-blend-overlay h-[80vh] "
            style={{
              background: `rgb(0 0 0 / 60%) url(${slide3}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center text-white space-y-8">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Adventure Awaits Your Call
              </h2>
              <p className="text-2xl lg:text-4xl">
                Embark on Thrilling Escapes with Expert Guides
              </p>
              <button className="bg-primary text-white px-6 py-4 rounded-lg inline-block font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import Counter from "../components/Counter/Counter";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Counter></Counter>
      <NewsLetter></NewsLetter>
      <Blog></Blog>
    </>
  );
};

export default Home;

import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Testimonial></Testimonial>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Products></Products>
      <Featured></Featured>
    </div>
  );
};

export default Home;

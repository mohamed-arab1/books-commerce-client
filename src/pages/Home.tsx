
import BestSellerBooks from "../components/BestSellerBooks";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection";
import Navbar from "../components/Navbar";
import SliderSection from "../components/SliderSection";

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="w-full">
      <SliderSection />
      <BestSellerBooks />
      <MiddleSection />
      <Footer />
    </div>
    </>
  )
};

export default Home;

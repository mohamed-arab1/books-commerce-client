
import BestSellerBooks from "../components/BestSellerBooks";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection";

const Home = () => {
  return (
    <div className="w-full min-h-screenm-auto">
      <BestSellerBooks />
      <MiddleSection />
      <Footer />
    </div>
  )
};

export default Home;

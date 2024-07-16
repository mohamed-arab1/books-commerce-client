import BestSellerBooks from "../components/BestSellerBooks";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection";
import Navbar from "../components/Navbar";
import SliderSection from "../components/SliderSection";

import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>home</title>
        <meta name="description" content="book store" />
      </Helmet>
      <div className="w-full min-h-screenm-auto">
        <SliderSection />
        <BestSellerBooks />
        <MiddleSection />
        <Footer />
      </div>
    </>
  );
=======
    <Navbar></Navbar>
    <div className="w-full">
      <SliderSection />
      <BestSellerBooks />
      <MiddleSection />
      <Footer />
    </div>
    </>
  )
>>>>>>> cba0c748e803e193481dd42b8482a1f9a1040bae
};

export default Home;

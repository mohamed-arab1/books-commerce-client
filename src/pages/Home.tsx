
import BestSellerBooks from "../components/BestSellerBooks";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
   <>
    <Helmet>
    <title>home</title>
    <meta name="description" content="book store" />
    </Helmet>
    <div className="w-full min-h-screenm-auto">
      <BestSellerBooks />
      <MiddleSection />
      <Footer />
    </div>
   
   </>
  )
};

export default Home;

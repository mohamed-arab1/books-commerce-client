import MiddleSection from "../components/MiddleSection";
import Buttons from "../elements/Buttons";
import Cards from "../elements/Cards";

const Home = () => {
  return (
    <main>
      <div className="w-full min-h-screenm-auto">
        <Buttons />
        <Cards />
      </div>
      <MiddleSection />
    </main>
  );
};

export default Home;

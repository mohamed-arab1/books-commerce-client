import HeaderText from "./HeaderText";
import MostPopularCards from "./MostPopularCards";

const MostPopular = () => {
  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
      <HeaderText text="Most Popular Books" />
      <MostPopularCards />
    </div>
  );
};

export default MostPopular;

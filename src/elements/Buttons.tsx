const buttons = [
  { id: 1, name: "All" },
  { id: 2, name: "Fantasy" },
  { id: 3, name: "Horror" },
  { id: 4, name: "self-help" },
];
import arr1 from "../assets/Arrow 1.svg";
import arr2 from "../assets/Arrow 2.svg";
export default function Buttons() {
  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
      <div className="w-full flex justify-center items-center  text-title gap-x-4  lg:text-[32px]">
        {" "}
        <img src={arr2} className="sm:w-[80px] w-[50px]" />
        <h1>Best Seller Books </h1>
        <img src={arr1} className="sm:w-[80px] w-[50px]" />
      </div>
      <div className=" lg:mx-20 gap-y-3 lg:gap-x-3 text-[20px] grid  lg:grid-cols-4 grid-cols-2 lg:w-3/6 md:w-3/6 w-4/6 m-auto  lg:justify-between items-center">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="bg-buttons w-button m-auto h-button flex justify-center items-center"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

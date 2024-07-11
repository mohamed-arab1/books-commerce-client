import HeaderText from "../components/HeaderText";

const buttons = [
  { id: 1, name: "All" },
  { id: 2, name: "Fantasy" },
  { id: 3, name: "Horror" },
  { id: 4, name: "self-help" },
];

export default function Buttons() {
  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
       <HeaderText text="Best Seller Books"/>
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

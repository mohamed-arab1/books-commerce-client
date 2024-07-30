import { SlOptionsVertical } from "react-icons/sl";
const data = [
  {
    id: 1,
    name: "  Lorem, ipsum dolor.",
    price: "127,50",
    sale: "999",
    src: "",
  },
  {
    id: 2,
    name: "  Lorem, ipsum dolor.",
    price: "127,50",
    sale: "999",
    src: "",
  },
  {
    id: 3,
    name: "  Lorem, ipsum dolor.",
    price: "127,50",
    sale: "999",
    src: "",
  },
];
export default function BestSellers() {
  return (
    <div className="bg-dash lg:mt-[-35px] mt-10  font-kantumruy lg:w-[30%] rounded-[10px] p-2 mr-3 ">
      <div className="flex justify-between items-center">
      <h1 className="font-bold capitalize py-2">best sallers</h1>
      <SlOptionsVertical />
      </div>
      <hr className="w-full h-[2px] bg-hr"/>
      {data.map((item) => (
        <div key={item.id} className="w-full">
          <div className="flex   w-full items-center">
            <div className="w-[60px] h-[60px] my-2 bg-gray-100"></div>
            <div className="mx-5">
              <div className="font-bold text-[14px]">{item.name}</div>
              <div className="text-gray-500">${item.price}</div>
            </div>
            <div className="ms-auto">
              <div  className="font-bold"> {item.price}</div>
              <div className="text-gray-500">{item.sale}salse</div>
            </div>
          </div>
        </div>
      ))}
      <button className="text-[15px] mt-2 hover:opacity-80 uppercase text-white bg-hover p-2 rounded-[5px]">report</button>
    </div>
  );
}

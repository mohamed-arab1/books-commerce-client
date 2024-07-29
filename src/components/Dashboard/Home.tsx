import { SlOptionsVertical } from "react-icons/sl";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
const items = [
  {
    id: 1,
    name: "total orders",
    time: "compared to oct 2023",
    pr: "34.7%",
    total: "127,500",
  },
  {
    id: 2,
    name: "active orders",
    time: "compared to oct 2023",
    pr: "34.7%",
    total: "127,500",
  },
  {
    id: 3,
    name: "completed orders",
    time: "compared to oct 2023",
    pr: "34.7%",
    total: "127,500",
  },
  {
    id: 4,
    name: "return orders",
    time: "compared to oct 2023",
    pr: "34.7%",
    total: "127,500",
  },
];

export default function Home() {
  return (
    <div className="w-full  p-3 font-kantumruy">
      <h1 className="font-bold text-[18px]">Dashboard</h1>
      <h6 className="capitalize text-[13px] font-semibold">{`Home > dashboard`}</h6>
      <div className="grid grid-cols-4 gap-x-4 full py-10 ">
        {items.map((item) => (
          <div key={item.id} className="bg-dash rounded-[10px] p-3 mt-[-19px]">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold capitalize">{item.name}</h1>
              <SlOptionsVertical />
            </div>
            <div className="flex  items-center  my-3 justify-between">
              <span className="text-[20px] p-2 bg-hover text-white rounded-[7px]">
                <IoBagHandleOutline />
              </span>
              <span className="font-bold">${item.total}</span>
              <span className="flex items-center font-semibold gap-x-1">
                <FaArrowUp />
                {item.pr}
              </span>
            </div>
            <div className="justify-end flex font-[14px] text-gray-500">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { MdOutlineDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { CgBox } from "react-icons/cg";
import { FaRegFileLines } from "react-icons/fa6";
import { useState } from "react";

export default function Saidbar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const categories = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" },
    { id: 5, name: "item5" },
    { id: 6, name: "item6" },
  ];

  return (
    <div className="xl:w-[18%] md:[20px] md:block hidden font-kantumruy tracking-normal font-bold  min-h-screen py-5 bg-dash border-r-[2px] border-gray-300">
      <div className=" w-full h-[55px]  overflow-hidden justify-center grid">
        <img
          className=""
          src="https://arikair.crane.aero/web/img/logo-big.png"
        />
      </div>
      <ul className="uppercase grid-row grid gap-y-5 mt-10 px-5">
        <li>
          <Link
            className={`flex items-center gap-x-3 p-2 ${
              location.pathname === "/dashboard"
                ? "bg-hover text-white rounded-[10px]"
                : ""
            }`}
            to="/dashboard"
          >
            {" "}
            <MdOutlineDashboard className="text-[22px]" /> Dashboard
          </Link>{" "}
        </li>
        <li className="">
          <Link
            className={`flex items-center gap-x-3 p-2 ${
              location.pathname === "/allproducts"
                ? "bg-hover text-white rounded-[10px]"
                : ""
            }`}
            to="/allproducts"
          >
            {" "}
            <CgBox className="text-[22px]" />
            all products
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-x-3 p-2" to="">
            {" "}
            <FaRegFileLines className="text-[22px]" />
            order list
          </Link>
          <ul
            className={`${
              location.pathname === "/allproducts" ? "block" : "hidden"
            } mt-8`}
          >
            <h1 className="capitalize text-[18px]">categories</h1>

            {categories.map((item, index) => (
              <div key={item.id} className="">
                <li
                  className={` my-2 font-semibold flex cursor-pointer  capitalize justify-between `}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name}{" "}
                  <div
                    className={`  flex justify-center items-center rounded-[10px] w-[50px] h-[35px] ${
                      index === activeIndex
                        ? "bg-hover text-white"
                        : " bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

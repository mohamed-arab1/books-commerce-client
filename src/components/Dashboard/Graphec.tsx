import { SetStateAction, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataWeekly = [
  { name: "Mon", uv: 3000 },
  { name: "Tue", uv: 4000 },
  { name: "Wed", uv: 2000 },
  { name: "Thu", uv: 2780 },
  { name: "Fri", uv: 1890 },
];

const dataMonthly = [
  { name: "Week 1", uv: 7000 },
  { name: "Week 2", uv: 8000 },
  { name: "Week 3", uv: 6000 },
  { name: "Week 4", uv: 9000 },
];

const dataYearly = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
];

export default function Graphec() {
  const [data, setData] = useState(dataWeekly);
  const [activeButton, setActiveButton] = useState("weekly");

  const handleButtonClick = (type: SetStateAction<string>) => {
    setActiveButton(type);
    if (type === "weekly") setData(dataWeekly);
    if (type === "monthly") setData(dataMonthly);
    if (type === "yearly") setData(dataYearly);
  };

  return (
    <div className=" px-2 w-[70%] bg-dash mt-[-35px] mx-3 rounded-[10px]">
      <div className="flex justify-between  items-center">
        <h1 className="font-bold font-kantumruy">Sale Graph</h1>
        <div className="flex items-center py-2">
          <button
            className={`px-4 py-1 mx-2 border-[1px] border-black text-[14px] font-semibold capitalize rounded-[5px] ${
              activeButton === "weekly" ? "bg-hover text-white border-none" : ""
            }`}
            onClick={() => handleButtonClick("weekly")}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-1 mx-2 border-[1px] border-black rounded-[5px] text-[14px] font-semibold capitalize ${
              activeButton === "monthly"
                ? "bg-hover text-white border-none"
                : ""
            }`}
            onClick={() => handleButtonClick("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-1 mx-2 border-[1px] border-black rounded-[5px] text-[14px] font-semibold capitalize ${
              activeButton === "yearly" ? "bg-hover text-white border-none" : ""
            }`}
            onClick={() => handleButtonClick("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-hr" />
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#369afe" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

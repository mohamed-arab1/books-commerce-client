import { SetStateAction, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegSquare } from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
const data = [
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
  {
    id: 1,
    products: "Lorem, ipsum.",
    orderId: "#1234",
    data: "nov 8th 2024",
    custmerName: "ahmed",
    status: "delavared",
    amount: "123",
  },
];

const ITEMS_PER_PAGE = 5;

export default function Order() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIdx = currentPage * ITEMS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-[98%] m-auto md:block hidden min-h-[350px] p-4 bg-dash rounded-[10px] my-3">
      <div className="flex justify-between capitalize font-kantumruy">
        <h1 className="capitalize font-bold">recent orders</h1>
        <SlOptionsVertical />
      </div>
      <hr className="w-full h-[0.5px] bg-gray-100 my-3" />
      <div className="flex justify-between font-semibold text-gray-500">
        <div className="w-[150px] items-center flex">
          <FaRegSquare className="mx-2" /> products
        </div>
        <div>order Id</div>
        <div className="text-center w-[100px]">date</div>
        <div>customer Name</div>
        <div className="text-center w-[100px]">status</div>
        <div className="text-center w-[80px]">amount</div>
      </div>
      <hr className="w-full font-kantumruy h-[0.5px] bg-gray-100 my-3" />

      {currentData.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between font-semibold">
            <div className="w-[150px] items-center flex">
              <FaRegSquare className="mx-2 " /> {item.products}
            </div>
            <div>{item.orderId}</div>
            <div className="text-center w-[100px]">{item.data}</div>
            <div className="flex">
              <div className="w-[30px] mx-2 h-[30px] rounded-full bg-gray-100"></div>
              {item.custmerName}
            </div>
            <div className="text-center w-[100px] flex items-center">
              <div className="w-[10px] mx-2 rounded-full bg-hover h-[10px]"></div>
              {item.status}
            </div>
            <div className="text-center w-[80px]">$ {item.amount}</div>
          </div>
          <hr className="w-full h-[0.5px] bg-gray-100 my-4" />
        </div>
      ))}

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="px-2 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          <FcPrevious className="text-hover" />
        </button>

        <div className="flex space-x-2 mx-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-3 py-1 rounded ${
                index === currentPage ? "bg-hover text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className="px-2 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          <FcNext className="text-hover" />
        </button>
      </div>
    </div>
  );
}

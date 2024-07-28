import { SetStateAction, useState } from "react";
import ProductCard from "../../elements/ProductCard";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../rtk/store";
import { fetchBooks } from "../../rtk/BookSlice";
import { useEffect } from "react";
import AddModule from "./AddModule";

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const currentData = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(isModalOpen);
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full h-full p-3 font-kantumruy bg-gray-100">
      <div className="phon:flex justify-between items-center">
        <div>
          <h1 className="font-bold  md:text-[18px]">All products</h1>
          <h6 className="capitalize text-[13px] font-semibold">{`home > All products`}</h6>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" phon:mx-5 phon:my-0 my-3 font-kantumruy capitalize bg-black w-[150px] h-[40px] rounded-[10px] text-white text-[13px] font-semibold flex justify-center items-center"
        >
          ADD new product
        </button>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2  grid-cols-1 ">
        {currentData.map((book) => (
          <ProductCard key={book._id} book={book} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded bg-gray-300"
        >
          <FcPrevious />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded phon:blook hidden ${
              currentPage === index + 1 ? "bg-hover text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 rounded bg-gray-300"
        >
          <FcNext />
        </button>
      </div>
      <AddModule isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

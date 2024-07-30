import  { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa6";
import { RiSeparator } from "react-icons/ri";
import { CardProps } from "../globalType/bookType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../rtk/store";
import { deleteBook } from "../rtk/BookSlice";
import Swal from "sweetalert2";
import UpdateModal from "../components/Dashboard/UpdateModule";

export default function ProductCard({ book }: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to delete the book?",
      text: "You won't be able to undo this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#104e6a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBook(book._id));
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

  return (
    <div
      key={book._id}
      className="bg-dash text-black rounded-[10px] py-1 p-3 h-[280px] my-5 phon:m-5"
    >
      <div className="flex mt-3">
        <div className="w-[80px] h-[80px] rounded-[10px] bg-white flex justify-center items-center">
          <img
            src="https://i.ebayimg.com/images/g/2LIAAOSwiNRj-7wO/s-l1600.webp"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="mx-8 font-kantumruy text-[14px]">
          <h1 className="font-kantumruy font-bold">
            {book.title.substring(0, 9)}
          </h1>
          <h6 className="capitalize text-gray-500">book</h6>
          <h6 className="font-bold">${book.price}.55</h6>
        </div>
        <div className="w-[35px] h-[25px] bg-gray-100 ms-auto flex justify-center items-center rounded-[5px]">
          <SlOptions
            className="cursor-pointer hover:scale-[1.1]"
            onClick={() => setShowOptions(!showOptions)}
          />
          {showOptions && (
            <div className="absolute bg-white font-bolde font-kantumruy w-[100px] shadow-md mt-[110px] py-3 rounded p-2">
              <button
                onClick={handleDelete}
                className="block border-b-[1px] w-full font-bold hover:text-hover my-1 border-gray-300"
              >
                Delete
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="block w-full hover:text-hover font-bold"
              >
                Update
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="font-kantumruy phone:text-[18px] capitalize font-semibold">
        {book.title}
      </div>
      <div className="text-gray-400 mb-2 text-[14px]">
        {book.description.substring(0, 50)}
      </div>
      <div className="border-[2px] phon:text-[16px] text-[14px] border-gray-200 min-h-[80px] p-3 font-kantumruy font-semibold text-gray-500">
        <div className="flex justify-between items-center">
          <span>sales</span>
          <span className="flex items-center">
            <FaArrowUp className="text-orange-400 mx-1" />
            1269
          </span>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 my-1" />
        <div className="capitalize flex justify-between">
          <span>remaining products</span>
          <span className="flex items-center">
            <RiSeparator className="text-orange-400 mx-1" />
            1269
          </span>
        </div>
      </div>
      {showModal && (
        <UpdateModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

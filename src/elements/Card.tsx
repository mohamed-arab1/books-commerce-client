import { FaRegStar } from "react-icons/fa6";
import { CardProps } from "../globalType/bookType";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";

export default function Card({ book }: CardProps) {
  const [favoret, setFavoret] = useState(false);
  const handilFavoret = () => {
    favoret === true ? setFavoret(false) : setFavoret(true);
  };

  return (
    <div
      className="h-CardHeight m-auto my-5 lg:w-CardWidth w-smallCardWidth bg-bgCard py-5 shadow-cardshadow rounded-card px-33px"
    >
      <img
        src={book.cover_image}
        className=" hover:scale-[1.1] w-full lg:h-imageCard h-smallImageCard rounded-card"
      />
      <div className="flex flex-col gap-y-2">
        <h4 className="font-DMSerifDisplay mt-5 text-18 tracking-wide">
          {book.title.substring(0, 15)}
        </h4>
        <article className="font-raleway font-medium text-[15px]  leading-6">
          {book.description.substring(0, 40)}
        </article>
        <div className="flex items-center justify-between">
          <span className="font-kantumruy font-medium ">${book.price}</span>
          <div className=" w-3/6 px-3 items-center justify-center text-star flex">
            <span className="ms-auto flex items-center">
              {book.rate}
              <FaRegStar className="  w-[20px] h-[20]" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            src={book.cover_image}
            className="w-[40px] h-[40px] rounded-full"
          />
          <h1 className="font-DMSerifDisplay text-18">{book.author.substring(0,15)}</h1>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button>
          <BsCart3 className="text-[19px]  text-star" />
        </button>
        <button onClick={handilFavoret}>
          {favoret ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

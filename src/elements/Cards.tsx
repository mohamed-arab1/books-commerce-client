import { useEffect } from "react";
import { FaRegStar } from "react-icons/fa6";
import { Book } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BoockSlice";
export default function Cards() {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);
  const selectedGenres = useSelector(
    (state: RootState) => state.books.selectedGenres
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  console.log(books);
  const filteredBooks =
    selectedGenres.length === 0
      ? books
      : books.filter((book) =>
          selectedGenres.some((genre) => book.genre.includes(genre))
        );
  return (
    <>
      <section className="w-[90%] justify-center h-full m-auto grid xl:grid-cols-3 sm:grid-cols-2 pr-5 grid-cols-1">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" &&
          filteredBooks.map((book: Book) => (
            <div
              key={book.id}
              className="h-CardHeight m-auto my-5 lg:w-CardWidth w-smallCardWidth bg-bgCard py-5 shadow-cardshadow rounded-card px-33px"
            >
              <img
                src={book.cover_image}
                className=" hover:scale-[1.1] w-full lg:h-imageCard h-smallImageCard rounded-card"
              />
              <div className="flex flex-col gap-y-3">
                <h4 className="font-DMSerifDisplay mt-5 text-18 tracking-wide">
                  {book.title}
                </h4>
                <article className="font-raleway font-medium text-16  leading-6">
                  {book.description.substring(0, 40)}
                </article>
                <div className="flex items-center justify-between">
                  <span className="font-kantumruy font-medium ">
                    ${book.price}
                  </span>
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
                  <h1 className="font-DMSerifDisplay text-18">{book.author}</h1>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BookSlice";
import Card from "../elements/Card";

const initialBooksLimit = 6;

import LoadingSpanner from "../elements/LoadingSpanner";
export default function Cards() {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);
  const selectedGenres = useSelector(
    (state: RootState) => state.books.selectedGenres
  );

  const [booksAmountToShow, setBooksAmountToShow] = useState(initialBooksLimit);

  const loadMoreBooks = () => {
    setBooksAmountToShow(booksAmountToShow + initialBooksLimit);
  };

  const showAllBooks = () => {
    setBooksAmountToShow(books.length);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const filteredBooks =
    selectedGenres.length === 0
      ? books
      : books.filter((book) =>
          selectedGenres.some((genre) => book.genre.includes(genre))
        );
  return (
    <>
      <section className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {status === "loading" && <LoadingSpanner />}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" &&
          filteredBooks
            .slice(0, booksAmountToShow)
            .map((book: Book) => <Card key={book._id} book={book} />)}
        {status === "succeeded" && filteredBooks.length > booksAmountToShow && (
          <div className="h-CardHeight m-auto my-5 lg:w-CardWidth w-smallCardWidth bg-bgCard py-5 shadow-cardshadow rounded-card px-33px text-stone-800 font-bold text-lg  flex flex-col items-center justify-center gap-4">
            <button
              className="px-4 py-2 transition-all duration-300 ease-in-out rounded-lg  hover:bg-stone-800 hover:text-white "
              onClick={loadMoreBooks}
            >
              Load More
            </button>
            <button
              className="px-4 py-2 transition-all duration-300 ease-in-out rounded-lg  hover:bg-stone-800 hover:text-white"
              onClick={showAllBooks}
            >
              Show All
            </button>
          </div>
        )}
      </section>
    </>
  );
}

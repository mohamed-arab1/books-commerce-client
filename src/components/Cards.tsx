import { useEffect } from "react";

import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BoockSlice";
import Card from "../elements/Card";
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
          filteredBooks.map((book: Book) => <Card book={book} />)}
      </section>
    </>
  );
}

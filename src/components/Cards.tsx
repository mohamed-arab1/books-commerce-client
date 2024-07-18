import { useEffect } from "react";
import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BookSlice";
import Card from "../elements/Card";
import LoadingSpaneer from "../elements/LoadingSpaneer";

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
      <section className="w-full h-full">
        {status === "loading" && (
          <div className=" w-full h-[400px] flex items-center justify-center">
            <LoadingSpaneer />
          </div>
        )}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div className="w-[90%] justify-center h-full m-auto grid xl:grid-cols-3 sm:grid-cols-2 pr-5 grid-cols-1">
            {filteredBooks.map((book: Book) => (

            

              <Card key={book._id} book={book} />

            ))}
          </div>
        )}
      </section>
    </>
  );
}

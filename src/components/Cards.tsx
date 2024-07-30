import { useEffect } from "react";
import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BookSlice";
import Card from "../elements/Card";

import LoadingSpanner from "../elements/LoadingSpanner";
import { Slider } from "./Slider";
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
        {status === "loading" && <LoadingSpanner />}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
            <Slider dots={true} slidesToShow={3} slidesToScroll={3} arrows={true}>
              {filteredBooks.map((book: Book) => (
                <Card key={book._id} book={book} />
              ))}
            </Slider>
        )}
      </section>
    </>
  );
}

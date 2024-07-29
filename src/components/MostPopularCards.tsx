import { useEffect } from "react";
import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BookSlice";
import Card from "../elements/Card";
import LoadingSpanner from "../elements/LoadingSpanner";
import { Slider } from "./Slider";
import Error from "./Error";

export default function MostPopularCards() {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const popularBooks = books.filter((book) => book.most_popular);
 



  return (
    <>
      {status === "loading" && <LoadingSpanner />}
      {status === "failed" && <Error title={error || ""} />}
      {status === "succeeded" && (
        <Slider dots={true} slidesToShow={3} slidesToScroll={3} arrows={true}>
          {popularBooks.map((book: Book) => (
            <Card key={book._id} book={book} />
          ))}
        </Slider>
      )}
    </>
  );
}




import { useEffect } from "react";
import { Book } from "../globalType/bookType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { fetchBooks } from "../rtk/BookSlice";
import Card from "../elements/Card";
import LoadingSpaneer from "../elements/LoadingSpaneer";

export default function MostPuppularCard() {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);


  const popularBooks = books.filter((book) => book.most_popular);
  console.log(popularBooks);
  
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
            {popularBooks.map((book: Book) => (
              <Card key={book._id} book={book} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

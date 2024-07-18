import { useEffect } from "react";
import { useParams } from "react-router";
import { Book } from "../globalType/bookType";
import { StarRating } from "../elements/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../rtk/store";
import { fetchBookDetails } from "../rtk/BookDetailsSlice";

export default function BookDetailsSection() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch() as AppDispatch;
  const { status, bookDetails } = useSelector(
    (state: RootState) => state.BookDetails
  );

  useEffect(() => {
    if (status === "idle" && id) {
      dispatch(fetchBookDetails(id));
    }
  }, [dispatch, status, id]);

  if (!bookDetails._id) return <div>Loading...</div>;

  const {
    cover_image,
    title,
    author,
    price,
    rate,
    description,
    genre,
    publication_year,
  } = bookDetails as Book;

  return (
    <section className="my-20">
      <div className="flex flex-col sm:flex-row justify-center gap-6  md:gap-12 mx-8 my-8">
        <img
          className="rounded-lg  sm:w-1/2 sm:max-w-[38rem] max-h-[35rem]"
          src={cover_image}
          alt={title}
        />
        <div className="space-y-4 min-mx-8 sm:w-[40%]">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{title}</h2>
            <h3 className="font-light text-gray-600">
              {author?.toUpperCase()}
            </h3>
            <p className="py-2 ml-3 font-bold text-red-600 text-2xl">
              ${price || "9.99"}
            </p>
            <StarRating size={30} rating={rate} starsOnly={true} />
            <p className="pt-4 text-lg font-bold"> Published in </p>
            <p>{publication_year}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Classifications</h4>
            <ul className="flex gap-4  flex-wrap">
              {genre?.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Description</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ServerBaseUrl } from "../Url";
import { Book } from "../globalType/bookType";
import { StarRating } from "../elements/StarRating";

export default function BookDetailsSection() {
  const { id } = useParams<{ id: string }>();
  const [bookDetails, setBookDetails] = useState<Book>();

  useEffect(() => {
    async function fetchBookById(id: string) {
      const { data } = await axios.get(`${ServerBaseUrl}/books/${id}`);
      console.log("data: ", data);
      setBookDetails(data);
    }
    if (id) fetchBookById(id);
  }, [id]);

  if (!bookDetails) return <div>Loading...</div>;

  // not there yet
  // publishedIn, price, author-img
  const {
    cover_image,
    title,
    author,
    price,
    rate,
    description,
    genre,
    publishedIn,
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
            <h3 className="font-light text-gray-600">{author.toUpperCase()}</h3>
            <p className="py-2 ml-3 font-bold text-red-600 text-2xl">
              {price || "$9.99"}
            </p>
            <StarRating
              size={30}
              defaultRating={rate}
              viewOnly={true}
              starsOnly={true}
            />
            <p className="pt-4 text-lg font-bold"> Published in </p>
            <p>{publishedIn || "United States"}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Classifications</h4>
            <ul className="flex gap-4  flex-wrap">
              {genre.map((g) => (
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

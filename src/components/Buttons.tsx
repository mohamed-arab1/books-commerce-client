import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../rtk/BookSlice";
import HeaderText from "./HeaderText";
import { RootState } from "../rtk/store";
import Button from "../elements/Button";

const buttons = [
  { id: 1, name: "All" },
  { id: 2, name: "Classic" },
  { id: 3, name: "Dystopian" },
  { id: 4, name: "Science Fiction" },
];

export default function Buttons() {
  const dispatch = useDispatch();
  const selectedGenres = useSelector(
    (state: RootState) => state.books.selectedGenres
  );

  const handleClick = (genre: string) => {
    if (genre === "All") {
      dispatch(setGenres([]));
    } else {
      dispatch(setGenres([genre]));
    }
  };

  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
      <HeaderText text="Best Seller Books" />
      <div className="lg:mx-20 gap-y-3 lg:gap-x-3 text-[18px] grid  lg:grid-cols-4 grid-cols-2 lg:w-3/6 md:w-3/6 w-4/6 m-auto  lg:justify-between items-center">
        <Button
          buttons={buttons}
          handleClick={handleClick}
          selectedGenres={selectedGenres}
        />
      </div>
    </div>
  );
}

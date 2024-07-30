import  { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateBook } from "../../rtk/BookSlice";
import { Book } from "../../globalType/bookType";
import Input from "../../elements/Input";
import { IoBook } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
interface ModalProps {
  book: Book;
  onClose: () => void;
}

type FormInputs = {
  title: string;
  description: string;
  price: string;
  cover_image: string;
  author: string;
  rate: number;
  genre: string[];
  publication_year: number;
  most_popular: boolean;
};

 function UpdateModal ({ book, onClose }:ModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [showGenres, setShowGenres] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      title: book.title,
      description: book.description,
      price: book.price,
      cover_image: book.cover_image,
      author: book.author,
      rate: book.rate,
      genre: book.genre,
      publication_year: book.publication_year,
      most_popular: book.most_popular,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(updateBook({ ...book, ...data }));
    onClose();
  };
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 relative rounded shadow-lg w-full max-w-md">
      <button
          onClick={onClose}
          className="absolute right-2 top-2 text-xl text-gray-600 hover:text-gray-800"
        >
          <IoClose />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-hover ">
        Update Book
        </h2>
       
        <form onSubmit={handleSubmit(onSubmit)} >
            {currentStep === 1 && (
            <div className="w-full">
              <Input
                name="title"
                label="Book Name"
                register={register}
                error={errors.title?.message}
              />
              <Input
                name="author"
                label="Author"
                register={register}
                error={errors.author?.message}
              />
              <Input
                name="publication_year"
                label="Publication Year"
                register={register}
                error={errors.publication_year?.message}
              />
              <Input
                name="description"
                label="Description"
                register={register}
                error={errors.description?.message}
              />
              <button
                type="button"
                onClick={nextStep}
                className="bg-hover w-full py-3 rounded-[10px] text-white px-3 text-[18px]  mt-4 col-span-2"
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 gap-x-4">
              {/* <div className="col-span-2"> */}
              <div className="w-[150px]  flex justify-center h-[150px] relative bg-gray-100 rounded-[10px]">
                <div className="absolute top-[40px] flex justify-center items-center bg-hover w-[40px] h-[40px] rounded-full">
                  <IoBook className="text-gray-100" />
                </div>
                <h1 className=" text-logintext font-semibold text-[14px] font-kantumruy top-[80px] absolute ">
                  upload book image
                </h1>
                <input
                  className="opacity-0 w-full h-full z-50 absolute"
                  type="file"
                  {...register("cover_image")}
                />
              </div>
              <div>
                <label
                  onClick={() => setShowGenres(!showGenres)}
                  className="cursor-pointer font-semibold text-logintext"
                >
                  Select Genres
                </label>
                {/* {showGenres && ( */}
                <div className="flex flex-col mt-2 text-logintext">
                  <label>
                    <input
                      type="checkbox"
                      value="Fiction"
                      {...register("genre")}
                      className="mx-3"
                    />
                    Fiction
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Non-Fiction"
                      {...register("genre")}
                      className="mx-3"
                    />
                    Non-Fiction
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Fantasy"
                      {...register("genre")}
                      className="mx-3"
                    />
                    Fantasy
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Science Fiction"
                      {...register("genre")}
                      className="mx-3"
                    />
                    Science Fiction
                  </label>
                </div>
                {/* )} */}
              </div>
              <div className="flex items-center ">
                <div className="flex items-center">
                  <label className=" font-semibold mx-2 text-[14px] text-logintext ">
                    most popular
                  </label>
                  <input type="checkbox" {...register("most_popular")} />
                </div>
              </div>

              <div className="w-5/6">
                <Input
                  name="price"
                  label="Price"
                  register={register}
                  error={errors.price?.message}
                />
              </div>
              <label className=" px-2 font-semibold text-logintext">
                rate
                <select
                  className="mx-3 focus:outline-none"
                  {...register("rate")}
                >
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>
              </label>

              <div></div>
              <button
                type="button"
                onClick={prevStep}
                className="mr-2 bg-gray-400 text-white px-3 py-1 rounded-[10px] mt-4"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-hover text-white px-3 py-2 rounded-[10px] mt-4"
              >
                Add
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;

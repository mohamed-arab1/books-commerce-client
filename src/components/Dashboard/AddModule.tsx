import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../elements/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { Book } from "../../globalType/bookType";
import { addBook } from "../../rtk/BookSlice";
import { AppDispatch } from "../../rtk/store";
import { IoBook } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

export type AddBook = Omit<Book, "_id">;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = yup.object({
  title: yup.string().required("Book name is required"),
  author: yup.string().required("Author is required"),
  publication_year: yup
    .number()
    .typeError("Publication year must be a number")
    .required("Publication year is required"),
  genre: yup.array().of(yup.string().required()).required("Genre is required"),
  description: yup.string().required("Description is required"),
  cover_image: yup.string().required("Cover image URL is required"),
  price: yup
    .string()
    .typeError("Price must be a number")
    .required("Price is required"),
  most_popular: yup.boolean(),
  rate: yup.number(),
});

export default function AddModule({ isOpen, onClose }: ModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [currentStep, setCurrentStep] = useState(1);
  const [showGenres, setShowGenres] = useState(false);

  const {
    register,

    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<AddBook>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      most_popular: false,
    },
  });

  const onSubmit = async (data: AddBook) => {
    try {
      await dispatch(addBook(data)).unwrap();
      Swal.fire("Success", "Book added successfully", "success");
      onClose();
    } catch (error) {
      Swal.fire("Error", "Failed to add book", "error");
    }
  };

  if (!isOpen) return null;

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-dash w-2/6 p-5 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          <IoClose />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-hover ">
          Add New Book
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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

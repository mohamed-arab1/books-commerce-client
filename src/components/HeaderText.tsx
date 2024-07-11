import arr1 from "../assets/Arrow 1.svg";
import arr2 from "../assets/Arrow 2.svg";

interface HeaderTextProps {
    text: string;
  }

export default function HeaderText({text}:HeaderTextProps) {
  return (
    <div className="w-full flex justify-center items-center  text-title gap-x-4  lg:text-[32px]">
        {" "}
        <img src={arr2} className="sm:w-[80px] w-[50px]" />
        <h1>{text}</h1>
        <img src={arr1} className="sm:w-[80px] w-[50px]" />
      </div>
  )
}

import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
export default function NavBar() {
  return (
    <div className="w-full items-center  flex justify-end h-[80px] px-5 bg-dash  border-gray-300 border-b-[1px]">
      <div className="xl:w-1/6 md:w-2/6 sm:w-2/6 w-[4/6] flex justify-between items-center">
        <FaSearch />
        <IoIosNotifications className="text-[20px]" />
        <select className="bg-dash border-[1px] border-black rounded-[5px] p-1">
          <option>addmin</option>
          <option>user</option>
        </select>
      </div>
    </div>
  );
}

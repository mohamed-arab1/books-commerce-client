import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" font-gothic min-h-[511px] grid  lg-grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:flex text-textFooter py-20 bg-bgfooter w-full phon:px-20 px-5">
      <div className=" xl:w-[40%] gap-y-8 flex flex-col mt-10">
        <h1 className="font-bold text-[32px]">Book Store </h1>
        <p className="text-[16px] font-light">
          {`Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse`}
          {` platea dictumst. Duis porta,quam ut finibus ultrices.`}
        </p>
        <hr className="h-[0.25px] bg-custom-color w-[90%]" />
        <div className="flex xl:w-2/6 w-3/6 justify-between text-custom-color">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <BiLogoInstagramAlt />
        </div>
      </div>

      <div className="md:mx-[60px] mt-10 xl:w-[20%] md:me-auto sm:ms-auto ">
        <h1 className="font-bold text-[25px] ">Useful Links</h1>
        <ul className="gap-y-5 flex flex-col font-light mt-10">
          <li>
            <Link to={""}>New Books</Link>
          </li>
          <li>
            <Link to={""}>Our Services</Link>
          </li>
          <li>
            <Link to={""}>Testimonials</Link>
          </li>
          <li>
            <Link to={""}>About Us</Link>
          </li>
          <li>
            <Link to={""}>Contact us</Link>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-[25px] mb-10"> Newsletter</h1>
        <p className="font-light text-[16px]">
          {`Subscribe to our weekly Newsletter and`}
        </p>
        {`receive updates via email.`}

        <div className=" my-7 bg-search items-center flex h-[55px] pr-1  phon:w-[315px] pl-5 rounded-[50px]">
          <input
            type="search"
            placeholder="Enter yor mail here."
            className=" focus:outline-none placeholder:text-[12px] h-full w-[85%] bg-transparent"
          />
          <button className=" flex justify-center items-center rounded-full  bg-title w-[45px] h-[45px]">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

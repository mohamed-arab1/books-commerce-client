import arr1 from "../assets/Arrow 1.svg";
import arr2 from "../assets/Arrow 2.svg";
import image_section from '../assets/books_image.svg'
const MiddleSection = () => {
  return (
    <section className='w-full h-[500px]  md:h-[626px] py-10 bg-[#D9D9D9]'>
      <article className="w-full flex justify-center items-center  text-title gap-x-4  lg:text-[32px]">
        {" "}
        <img src={arr2} className="sm:w-[80px] w-[50px]" />
        <h1>Best Seller Books </h1>
        <img src={arr1} className="sm:w-[80px] w-[50px]" />
      </article>
      <article className='w-full flex justify-center items-center mt-8 px-5 md:px-0 text-sm md:text-base'>
        <p>Li Europan lingues es membres del sa m familie. Lor separat existentie es my</p>
      </article>
      <article className='w-full flex justify-center items-center mt-8'>
        <img src={image_section} alt="image_section" />
      </article>
    </section>
  )
}

export default MiddleSection
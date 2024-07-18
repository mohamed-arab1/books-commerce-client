import  {  useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const Links = [
      { id: 1, link: "Home", href: "/#home" },
      { id: 2, link: "Contact", href: "/#contact" },
      { id: 3, link: "Books", href: "/#Books" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
   
  return (
    <section className='text-[#F4F7FA] bg-[#202D40] w-full mt-[-10px]'>
      <section className='container mx-auto min-h-12 px-2 flex-col sm:flex-row flex items-center justify-between m-[10px] p-[15px]'>

      {menuOpen && (
        <section className="absolute left-0 pb-2 sm:top-16 w-full md:hidden flex sm:flex-row gap-3 justify-center items-center bg-[#638BBC] ">
          {Links.map(({ id, link, href }) => (
            <Link to={href} key={id} className="hover:text-[#A3D3FB] " onClick={() => setMenuOpen(false)} >
              {link}
            </Link>
          ))}
        </section>
      )}
      <RxHamburgerMenu size={30} className={`${menuOpen && "mt-[35px]"} block md:hidden cursor-pointer z-10  sm:mt-0`}  onClick={() => setMenuOpen(!menuOpen)}/>

      <div className="hidden md:flex flex-col sm:flex-row  gap-10">
      {Links.map(({ id, link, href }) => (
            <Link to="/" key={id} onClick={() => window.location.replace(href)} className='hover:text-[#A3D3FB]
            border-transparent hover:border-b-2 hover:border-[#A3D3FB]'>
              {link}
            </Link>
          ))}
      
         </div>

         <div className='flex items-center '>
         <Link to="/add-to-cart" className='hover:text-white hover:bg-[#A3D3FB] bg-white p-[10px] rounded text-[#202D40]'>
         <button>Go To Cart</button> 
          </Link>

          <div className="ml-[20px] mr-[20px]">
            
        <button >        
          <Link to="/login" className='hover:text-white hover:bg-[#A3D3FB] bg-white p-[10px] rounded text-[#202D40]'>Login</Link>
        </button>
        
      </div>
      <FaRegUserCircle size={25}  />
            </div>
      
      </section>
    </section>
  )
}
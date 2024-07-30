import NavBar from "../components/Dashboard/Navbar";
import Products from "../components/Dashboard/Products";
import Saidbar from "../components/Dashboard/Saidbar";

export default function Allproducts() {
  return (
    <div className="w-full min-h-screen flex">
        <Saidbar/>
        <div className="xl:w-[82%] md:w-[80%] w-full">
        <NavBar/>
        <Products/>
        </div>
      
    </div>
  )
}

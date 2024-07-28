import Navbar from "../components/Dashboard/Navbar";
import Saidbar from "../components/Dashboard/Saidbar";
import Home from "../components/Dashboard/Home";
import Statics from "../components/Statics";
import Order from "../components/Dashboard/Order";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex bg-gray-100">
      <Saidbar />
      <div className="w-[82%]">
      <Navbar/>
      <Home/>
      <Statics/>
      <Order/>
      </div>
     
    </div>
  );
}

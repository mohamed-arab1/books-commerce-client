import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Notfound from "./pages/Notfound";

import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Allproducts from "./pages/Allproducts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
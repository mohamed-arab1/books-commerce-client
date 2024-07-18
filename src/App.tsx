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

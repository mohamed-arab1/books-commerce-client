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
<<<<<<< HEAD
import Notfound from "./pages/Notfound";
=======
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
>>>>>>> cba0c748e803e193481dd42b8482a1f9a1040bae

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
=======
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/add-to-cart" element={<Cart />} />
>>>>>>> cba0c748e803e193481dd42b8482a1f9a1040bae
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

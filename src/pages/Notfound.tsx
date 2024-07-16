import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        {/* <h1>404 - Page Not Found</h1> */}
        <h1 className="text-notFound text-[150px]">404</h1>
      <p className="font-inter">Sorry, the page you are looking for could not be found.</p>
    <Link to="/" className="hover:text-notFound">back to home</Link>
    </div>
  )
}

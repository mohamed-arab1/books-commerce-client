import { Link } from "react-router-dom";

const NavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Books",
    link: "/books",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
];

export default function Header() {
  return (
    <header className="font-gothic  text-textFooter p-5 bg-bgfooter w-full ">
      <nav className="w-full">
        <ul className="flex items-center justify-around w-full">
          <li>
            <Link to="/">
              <img
                className="size-10 w-auto"
                src="/logo-no-background.png"
                alt=""
              />
            </Link>
          </li>
          {NavLinks.map((link) => (
            <li className="hidden sm:block" key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

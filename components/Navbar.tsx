import Link from "next/link";
import NavbarButton from "./NavbarButton";
import { NavbarLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="max-container w-full px-5 py-5 absolute top-0 left-1/2 -translate-x-1/2 z-50 ">
      <div className="navbar flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="btn btn-ghost normal-case font-bold text-xl text-secondary sm:text-white"
          >
            TastyBites
          </Link>
        </div>

        <ul className="hidden sm:flex gap-6 md:gap-10">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="capitalize font-medium text-lg hover:text-opacity-80 text-white"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-2 border-white text-white font-semibold py-3 border-spacing-4 rounded-full px-7 tracking-wider hidden sm:block">
          123 456 789
        </div>
        <NavbarButton />
      </div>
    </div>
  );
};
export default Navbar;

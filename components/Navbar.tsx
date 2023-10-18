import Link from "next/link";
import NavbarButton from "./NavbarButton";
import { NavbarLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="max-container px-5 py-5">
      <div className="navbar flex items-center justify-between">
        <div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            TastyBites
          </Link>
        </div>

        <ul className="hidden md:flex gap-10">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="capitalize font-medium text-lg text-secondary hover:text-opacity-80"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="btn btn-outline btn-accent rounded-full px-7 tracking-wider hidden md:block">
          123 456 789
        </button>
        <NavbarButton />
      </div>
    </div>
  );
};
export default Navbar;

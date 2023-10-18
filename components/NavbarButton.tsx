import { NavbarLinks } from "@/constants";
import Link from "next/link";

const NavbarButton = () => {
  return (
    <div className="flex-none md:hidden">
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary tabIndex={0} className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </summary>
        <ul
          tabIndex={0}
          className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
        >
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="capitalize font-medium text-[0.9rem] text-secondary"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="border-2 border-accent text-accent font-medium text-[0.9rem]"
              href="/"
            >
              123 456 789
            </Link>
          </li>
        </ul>
      </details>
    </div>
  );
};
export default NavbarButton;

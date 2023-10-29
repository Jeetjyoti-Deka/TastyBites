import { NavbarLinks } from "@/constants";
import Link from "next/link";

const NavbarButton = () => {
  return (
    <div className="flex-none sm:hidden">
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary
          tabIndex={0}
          className="btn btn-ghost btn-circle bg-transparent hover:bg-white/20 active:bg-black/5 transition-all"
        >
          {/* e5deed */}
          <svg
            fill="#2A293B"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 -4 24 24"
            className="inline-block w-8 h-8 stroke-current"
            stroke="#e5deed"
            strokeWidth="0.9"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.192"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                className="cls-1"
                d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"
              ></path>{" "}
            </g>
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

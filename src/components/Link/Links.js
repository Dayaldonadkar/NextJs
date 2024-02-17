import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Links = () => {
  const session = true;
  const isAdmin = true;
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <ul className="md:flex items-center md:space-x-4 lg:space-x-8">
        {links.map((link) => (
          <Link href={link.path}>
            <li
              className={`px-3 py-1 text-sm ${
                pathname === link.path && "bg-white text-black rounded-lg" // Add for current page
              }`}
            >
              {link.title}
            </li>
          </Link>
        ))}
        {session ? (
          <>
            <li className="py-1 px-3 text-sm lg:text-base">
              {isAdmin && <Link href="/admin">Admin</Link>}
            </li>{" "}
            <button className="py-1 px-3 bg-white text-sm lg:text-base text-black">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="py-1 px-3 text-sm lg:text-base">Login</button>
          </Link>
        )}{" "}
      </ul>
    </div>
  );
};

export default Links;

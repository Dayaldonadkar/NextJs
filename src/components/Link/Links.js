import Link from "next/link";
import React from "react";

const Links = () => {
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
  return (
    <div className="flex">
      {links.map((link) => (
        <ul>
          <Link href={link.path}>
            <li>{link.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Links;

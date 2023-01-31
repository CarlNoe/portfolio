import Navlink from "./Navlink";
import { useState } from "react";

interface Link {
  href: string;
  name: string;
}

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const links: Link[] = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Skills" },
    { href: "/contact", name: "Work" },
  ];

  return (
    <nav className="absolute left-0 z-10 flex w-full items-center justify-between bg-none py-8 px-[8%]">
      <div className="flex">
        <a
          className="mr-8"
          href="https://github.com/carlnoe"
          title="Come on my GitHub !"
          target="_blank"
        >
          <img src="src\assets\github.svg" />
        </a>
        <a
          className="mr-8"
          href="https://www.linkedin.com/in/carl-noe/"
          title="Come on my Linkedin !"
          target="_blank"
        >
          <img src="src\assets\linkedin.svg" />
        </a>
      </div>

      <button
        type="button"
        className="ml-3 rounded-full p-2 text-sm text-secondary md:hidden"
      >
        <img src="src\assets\menu.svg" />
      </button>

      <div className="hidden md:flex">
        {links.map((link) => (
          <Navlink
            href={link.href}
            name={link.name}
            index={links.indexOf(link) + 1}
            key={links.indexOf(link)}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

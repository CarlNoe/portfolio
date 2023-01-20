import Navlink from "./Navlink";

interface Link {
  href: string;
  name: string;
}

function Navbar(): JSX.Element {
  const links: Link[] = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Skills" },
    { href: "/contact", name: "Work" },
  ];

  return (
    <nav className="flex justify-between items-center py-8 w-full bg-none">
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

      <div className="flex">
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

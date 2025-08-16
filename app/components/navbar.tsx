import { useEffect, useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

const navItems = [
  { name: "About Us", link: "#about" },
  { name: "Our Philosophy", link: "#philosophy" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Team", link: "#team" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // At top of page
      setAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        show ? "translate-y-0" : "-translate-y-full",
        atTop
          ? "bg-transparent text-white"
          : "border-b border-[#ebebf0] backdrop-blur-2xl bg-white/75 text-foreground"
      )}
    >
      <div className="flex items-center h-18 justify-between py-4 px-5 md:px-0 mx-auto w-full max-w-250">
        <Link to="/" className="font-bold text-2xl">
          Kingmakers
        </Link>
        <div className="grid grid-cols-[1fr_auto] gap-4 ml-8 w-full">
          <div className="w-full flex items-center space-x-2">
            {navItems.map((item) => (
              <Button key={item.name} asChild variant="menu">
                <Link to={item.link}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div>
            <Button variant={atTop ? 'default': 'dark'}>Get In Touch</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

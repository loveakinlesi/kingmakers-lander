import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";

const navItems = [
  { name: "About Us", link: "#about" },
  { name: "Our Philosophy", link: "#philosophy" },
  // { name: "Portfolio", link: "#portfolio" },
  // { name: "Team", link: "#team" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up; detect top
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y === 0);
      if (y > lastScrollY.current && y > 50) setShow(false);
      else setShow(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open; close on ESC
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      {/* Header (fixed 72px) */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full h-[72px] z-50 transition-transform duration-300",
          show ? "translate-y-0" : "-translate-y-full",
          // When menu is open force transparent + white text over black overlay
          mobileOpen
            ? "bg-transparent text-white"
            : atTop
              ? "bg-transparent text-white"
              : "border-b border-[#ebebf0] backdrop-blur-2xl bg-white/75 text-foreground"
        )}
      >
        <div className="flex items-center justify-between px-5 lg:px-0 mx-auto w-full max-w-250 h-full">
          <Link to="/" className="font-bold text-2xl" onClick={handleNavClick}>
           <Logo size={24}/>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:grid grid-cols-[1fr_auto] gap-4 ml-8 w-full">
            <nav className="w-full flex items-center space-x-2">
              {navItems.map((item) => (
                <Button key={item.name} asChild variant="menu">
                  <Link to={item.link}>{item.name}</Link>
                </Button>
              ))}
            </nav>
            <div>
              <Button variant={atTop ? "default" : "dark"}>Get In Touch</Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={cn(
              "md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2",
            )}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <svg
              className={cn("h-6 w-6 transition-transform duration-200", mobileOpen && "rotate-90")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Fullscreen mobile dropdown */}
      <div
        className={cn(
          "fixed inset-0 md:hidden z-40 transition-opacity duration-200",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        {/* Black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Menu content (push below header but cover full screen) */}
        <div className="relative h-full pt-[72px] px-6 pb-6 flex flex-col ">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={handleNavClick}
                className="text-white text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button className="w-full" variant="default" onClick={handleNavClick}>
              Get In Touch
            </Button>
          </div>

          {/* Optional extras: social / footer */}
          {/* <div className="absolute bottom-6 left-6 right-6 text-white/70 text-sm">© 2025 Kingmakers</div> */}
        </div>
      </div>
    </>
  );
}

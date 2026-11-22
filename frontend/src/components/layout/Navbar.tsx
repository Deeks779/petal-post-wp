
import { Flower2, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Flowers", href: "#flowers" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-sage/60 bg-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-peacock-indigo"
        >
          <Flower2 size={29} strokeWidth={1.8} />

          <span className="text-2xl font-bold tracking-tight">
            petal post<span className="text-cupid-pink">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-dark-text transition-colors hover:text-cupid-pink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#flowers"
          className="hidden items-center gap-2 rounded-full bg-peacock-indigo px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-peacock-blue md:flex"
        >
          <ShoppingBag size={17} />
          My Bouquet
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-peacock-indigo md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-sage/60 bg-cream px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-dark-text"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#flowers"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-peacock-indigo"
            >
              My Bouquet →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

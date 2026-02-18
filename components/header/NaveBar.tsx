"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ModeButton from "./ModeButton";
import SideBar from "./SideBar";
import { navLinks } from "@/constants/enmus";
import Link from "./../Link/Link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "card-glass py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="#home" className="text-3xl font-bold text-gradient">
            ES<span className="text-foreground">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ModeButton />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <div>
              <ModeButton />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground  relative z-[60]"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <></>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={34} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Creative full-screen mobile menu */}

      <div>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
      </div>
    </>
  );
};

export default Navbar;

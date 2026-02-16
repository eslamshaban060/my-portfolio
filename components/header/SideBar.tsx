import React from "react";

// props types
type NavLink = {
  label: string;
  href: string;
};

type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavLink[];
};

const SideBar = ({ isOpen, setIsOpen, navLinks }: SideBarProps) => {
  return (
    <div>
      <div
        className={`fixed md:shadow-[ -20px_0_60px_rgba(0,0,0,0.5) ] top-0 right-0 h-full w-full sm:w-[420px] bg-background border-l border-border/20 z-50 transform transition-all duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "1s" }}
          />
        </div>

        {/* Close Button - Floating & Minimal */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 z-50 group"
          aria-label="Close menu"
        >
          <div className="relative w-14 h-14 rounded-full bg-muted/50 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 flex items-center justify-center overflow-hidden">
            {/* Rotating border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/70 to-primary animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute inset-[2px] rounded-full bg-background" />
            </div>

            {/* X Icon */}
            <div className="relative z-10">
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Menu Content Container */}
        <div className="relative h-full flex flex-col pt-24 pb-12 px-8">
          {/* Elegant Header */}
          <div className="mb-12">
            <div className="inline-block">
              <h2
                className="text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Portfolio
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-primary  via-orange-600 to-transparent" />
            </div>
            <p className="text-muted-foreground text-sm mt-3 font-light tracking-wide">
              NAVIGATION
            </p>
          </div>

          {/* Navigation Links - Ultra Premium */}
          <nav className="flex-1 space-y-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group block relative"
                style={{
                  animation: `slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden ridues2xl">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border */}
                  <div className="absolute inset-0 border border-border group-hover:border-primary/30 ridues2xl transition-all duration-500" />

                  {/* Content */}
                  <div className="relative px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Number indicator */}
                      <span className="text-muted-foreground font-mono text-xs group-hover:text-primary transition-colors duration-300">
                        0{i + 1}
                      </span>

                      {/* Link text */}
                      <span
                        className="text-2xl font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {link.label}
                      </span>
                    </div>

                    {/* Arrow with trail effect */}
                    <div className="relative">
                      <svg
                        className="w-6 h-6 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                      {/* Trail effect */}
                      <div className="absolute top-1/2 right-0 w-0 h-[2px] bg-gradient-to-r from-primary to-transparent group-hover:w-8 -translate-y-1/2 transition-all duration-500 opacity-0 group-hover:opacity-50" />
                    </div>
                  </div>

                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="mt-8 space-y-6">
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="group relative block overflow-hidden ridues2xl"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary bg-[length:200%_100%] animate-gradient" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              {/* Button content */}
              <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-primary-foreground font-semibold text-lg tracking-wide">
                  Download CV
                </span>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 ridues2xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500" />
            </a>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-muted-foreground text-xs tracking-widest font-light">
                © 2025{" "}
                <span className="text-foreground/80 font-normal">
                  ESLAM SHABAN
                </span>
              </p>

              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Noise texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" /%3E%3C/svg%3E")',
              backgroundRepeat: "repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

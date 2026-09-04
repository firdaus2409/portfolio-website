import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(nav.map((n) => n.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    const wasOpen = open;
    setOpen(false);
    const scrollToSection = () => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };
    // on mobile, the menu takes ~220ms to collapse (see the AnimatePresence
    // transition below). scrolling before that finishes means the browser
    // measures the target position while the menu is still taking up space,
    // so it lands in the wrong spot or the scroll gets cut off mid-animation.
    // waiting it out fixes the janky/no-op scroll on mobile.
    if (wasOpen) {
      setTimeout(scrollToSection, 260);
    } else {
      scrollToSection();
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 font-display text-sm tracking-wide text-fg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-accent font-mono text-xs">
              {profile.initials}
            </span>
            <span className="hidden sm:inline font-medium">{profile.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-2 transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="rounded-md border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent/20"
            >
              Let's talk
            </a>
          </div>

          <button
            className="md:hidden text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-1 font-mono text-sm">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="py-2.5 text-muted hover:text-fg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2.5 text-center text-accent"
              >
                Let's talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

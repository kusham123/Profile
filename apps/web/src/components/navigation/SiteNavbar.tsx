"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((value): value is HTMLElement => Boolean(value));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = useMemo(
    () =>
      cn(
        "fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl transition-all duration-300",
        scrolled && "top-3 w-[min(980px,calc(100%-1.25rem))] bg-black/65 shadow-[0_12px_45px_rgba(0,0,0,0.45)]"
      ),
    [scrolled]
  );

  return (
    <motion.header
      className={navbarClassName}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href="#home" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-rose-500/80 to-zinc-700 text-sm font-semibold text-white shadow-[0_0_35px_rgba(255,77,77,0.18)]">
          {initials}
        </span>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
          <p className="text-xs text-zinc-400">{siteConfig.role}</p>
        </div>
      </a>

      <nav className="hidden items-center gap-2 lg:flex">
        {navItems.map((item) => {
          const isActive = active === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:text-white",
                isActive && "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              )}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
          {siteConfig.availability}
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
          {siteConfig.country}
        </div>
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-4xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white",
                    active === item.href && "bg-white/10 text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

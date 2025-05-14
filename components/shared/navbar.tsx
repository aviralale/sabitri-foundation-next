"use client";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Logo } from "../logo";
import { ModeToggle } from "./mode-toggle";

// Enhanced Logo Component with animation
const AnimatedLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Logo />
    </div>
  );
};

// Modern navigation menu items with dropdown capabilities
const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/membership" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : "inactive"}
        data-scrolled={isScrolled ? "true" : "false"}
        className="fixed z-1000 w-full border-b border-transparent backdrop-blur-xl transition-all duration-300 data-[scrolled=true]:border-muted/20 data-[scrolled=true]:bg-background/80 data-[scrolled=true]:shadow-lg data-[scrolled=true]:shadow-primary/5 dark:data-[scrolled=true]:border-muted/10 dark:data-[scrolled=true]:bg-background/70 dark:data-[scrolled=true]:shadow-primary/10"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <AnimatedLogo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="group relative z-20 -m-2.5 -mr-4 block cursor-pointer rounded-full p-2.5 transition-colors hover:bg-muted lg:hidden dark:hover:bg-muted/20"
              >
                <Menu
                  className={`m-auto size-5 duration-300 ${
                    menuState ? "rotate-180 scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-5 duration-300 ${
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  }`}
                />
              </button>

              <div className="hidden lg:block">
                <ul className="flex items-center gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        href={item.href}
                        className="group relative text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span>{item.name}</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={` fixed inset-x-4 top-20 z-40 mb-6 transform overflow-hidden rounded-xl border border-muted/20 bg-background/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:static lg:inset-auto lg:m-0 lg:flex lg:w-fit lg:transform-none lg:items-center lg:gap-6 lg:space-y-0 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent ${
                menuState
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0 pointer-events-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"
              }`}
            >
              <div className="lg:hidden">
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block font-medium transition-colors hover:text-primary"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:mt-0">
                <div className="flex items-center gap-3 lg:mr-4">
                  <ModeToggle />

                  <button className="flex h-8 items-center gap-1 rounded-full bg-muted/20 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground">
                    <Globe className="size-3" />
                    <span>EN</span>
                  </button>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-blue-600 transition-all duration-300 hover:brightness-110 "
                >
                  <Link href="/join-us">
                    <span>Join Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

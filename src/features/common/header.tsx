"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 bg-primary text-white shadow-lg"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">
          <Image
            src="/brand-logo.png"
            alt="Rocketella Logo"
            width="130"
            height="130"
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden space-x-4 text-white md:flex">
            <Link href="/">HOME</Link>
            <Link href="/">ABOUT</Link>
            <Link href="/">SERVICE</Link>
            <Link href="/">MENU</Link>
            <Link href="/">PAGES</Link>
            <Link href="/">CONTACT</Link>
          </nav>
          <Button variant="outline" className="text-primary">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </header>
  );
};

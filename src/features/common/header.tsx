"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const invertedHeader = pathname === "/services";

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
        isScrolled || invertedHeader
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
          <div className="hidden space-x-4 md:flex md:items-center">
            <nav className="space-x-4 text-white">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/">MENU</Link>
              <Link href="/">PAGES</Link>
              <Link href="/">CONTACT</Link>
            </nav>
            <Button variant="outline" className="text-primary">
              GET IN TOUCH
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[250px]">
                <nav className="mb-4 flex flex-col space-y-4">
                  <Link href="/">HOME</Link>
                  <Link href="/about">ABOUT</Link>
                  <Link href="/services">SERVICES</Link>
                  <Link href="/">MENU</Link>
                  <Link href="/">PAGES</Link>
                  <Link href="/">CONTACT</Link>
                </nav>
                <Button variant="outline" className="text-primary">
                  GET IN TOUCH
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

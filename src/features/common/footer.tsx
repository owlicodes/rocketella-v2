import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="mb-4 md:mb-0">
            <Image
              src="/brand-logo.png"
              alt="Brand Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="mb-4 text-sm text-primary-foreground md:mb-0">
            © {new Date().getFullYear()} Rocketella Studios Co. All rights
            reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6 text-primary-foreground hover:text-gray-800" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6 text-primary-foreground hover:text-gray-800" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
            >
              <Twitter className="h-6 w-6 text-primary-foreground hover:text-gray-800" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

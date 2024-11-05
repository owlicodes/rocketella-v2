import Image from "next/image";

import { Button } from "@/components/ui/button";

export const PortfolioSection = () => {
  return (
    <section className="my-4 w-full">
      <div className="mx-auto w-full md:max-w-3xl">
        <div className="w-full">
          <h2 className="mb-4 px-4 text-lg font-bold md:text-center md:text-4xl">
            We are here to elevate your business with infinite possibilities,
            <span className="text-brand-orange underline decoration-wavy">
              one solution
            </span>{" "}
            at a time.
          </h2>
        </div>
        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <Image
            src="/video-image.png"
            alt="Temporary Video Image"
            width={500}
            height={500}
            layout="responsive"
            className="transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="mx-auto mt-8 w-full md:max-w-5xl">
        <div className="relative h-64 w-full overflow-hidden shadow-lg md:h-[600px]">
          <Image
            src="/portfolio-image.png"
            alt="Portfolio Image"
            width={500}
            height={500}
            layout="responsive"
            className="transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-4 flex w-full justify-center">
        <Button className="rounded-none bg-brand-orange hover:bg-brand-orange/90">
          OUR PORTFOLIO
        </Button>
      </div>
    </section>
  );
};

import Image from "next/image";

import { Button } from "@/components/ui/button";

export const PassionSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Our passion is crafting solutions that bring{" "}
                <span className="relative text-brand-orange">smiles</span> to
                faces.
              </h2>
              <p className="max-w-[600px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="rounded-none bg-brand-orange hover:bg-brand-orange/90">
                Connect with Us
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
            <Image
              alt="Passionate team working together"
              className="object-cover"
              height="410"
              src="/passion-image.png"
              width="650"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

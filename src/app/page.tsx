import { Button } from "@/components/ui/button";
import { Header } from "@/features/common/header";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <section className="flex min-h-screen items-center bg-primary text-white">
        <div className="container mx-auto px-4 py-32 text-center md:py-64">
          <h1 className="mb-4 text-6xl font-bold md:text-7xl">
            we make things happen
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            We produce top notch bespoke solutions for business, big and small
          </p>
          <Button className="rounded-none bg-[#F58B1F] px-6 py-6">
            FIND YOUR SOLUTIONS
          </Button>
        </div>
      </section>
    </div>
  );
}

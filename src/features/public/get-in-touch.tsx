import { Button } from "@/components/ui/button";

export const GetInTouch = () => {
  return (
    <div className="text-center">
      <h3 className="mb-4 text-2xl font-bold">
        Let's skyrocket your business today!
      </h3>
      <p className="mb-2 text-lg">Got a project? Let's make it happen!</p>
      <p className="mb-6 text-gray-600">
        Give us the details and we'll send you a free quote!
      </p>
      <Button
        size="lg"
        className="rounded-none bg-brand-orange hover:bg-brand-orange/90"
      >
        Get In Touch
      </Button>
    </div>
  );
};

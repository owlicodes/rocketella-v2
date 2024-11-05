import { cn } from "@/lib/utils";

const services = [
  {
    key: "websiteDevelopment",
    title: "website development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus veritatis quia deserunt sunt earum ea nam fugit tempore architecto?",
  },
  {
    key: "socialMediaManagement",
    title: "social media management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus veritatis quia deserunt sunt earum ea nam fugit tempore architecto?",
  },
  {
    key: "brandRefreshAndLaunch",
    title: "brand refresh and launch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus veritatis quia deserunt sunt earum ea nam fugit tempore architecto?",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row">
        {services.map((service, index) => (
          <div
            key={service.key}
            className={cn(
              "space-y-2 px-4 py-6 md:py-16",
              index === 1 && "bg-neutral-100"
            )}
          >
            <h2 className="text-xl font-bold md:text-3xl">{service.title}</h2>
            <p className="text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

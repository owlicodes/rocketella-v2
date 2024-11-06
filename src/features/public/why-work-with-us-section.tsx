import { Coins, Lightbulb, Target, Users, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyWorkWithUsSection = () => {
  const reasons = [
    {
      title: "Savings (lots of it!)",
      description:
        "Having an in-house creative and marketing team will require you to provide monthly compensation and benefits, invest in equipment, rent for office spaces, and in some cases, offer transportation allowances. With Rocketella Studios, you'll only get to pay for the service you'd like to acquire which is less costly than maintaining your own employees. And when we say less cost and expenses, this means more savings!",
      icon: <Coins className="h-6 w-6 text-primary" />,
    },
    {
      title: "Fresher perspective",
      description:
        "Your Rocketella team is exposed to various marketing and design styles that match most creative needs. And since part of our work is to help you keep pace with trends or empower you to develop your own, you can always guarantee that your campaigns will always have a fresh and innovative approach!",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
    {
      title: "Highly skilled professionals",
      description:
        "Our team consists of young, fun, and creative geniuses that have mastered all that whats and the hows when it comes to creating campaigns. With us, you can always guarantee that your brand's message is conveyed effectively.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Personalized strategies",
      description:
        "We don't believe in having a one-size-fits-all approach. We treat our clients individually and design a unique strategy based on our client's needs and objectives.",
      icon: <Target className="h-6 w-6 text-primary" />,
    },
    {
      title: "Fast turnaround time",
      description:
        "Our clients rely on us for rapid response and lightning fast turnaround times. Tardiness has no room for us so rest assured that we will always deliver every project on time, or even ahead of schedule.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="bg-background px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why work with us</h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            There are many marketing and creative agencies that you can work
            with. But, there's only one like us. When you allow{" "}
            <span className="font-semibold text-brand-orange">
              Rocketella Studios
            </span>{" "}
            as your creative and branding companion, you'll get:
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="flex h-full flex-col bg-white shadow-md transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {reason.icon}
                  <span>{reason.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

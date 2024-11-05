import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Study Reveals Benefits of Remote Work",
      description:
        "Research shows increased productivity and employee satisfaction in remote work environments.",
      image: "/news-1.png",
    },
    {
      id: 2,
      title: "Tech Giant Announces Breakthrough in Quantum Computing",
      description:
        "Major advancements in quantum technology promise to revolutionize data processing and security.",
      image: "/news-2.png",
    },
    {
      id: 3,
      title: "Global Initiative Launched to Combat Climate Change",
      description:
        "World leaders unite to implement ambitious plans for reducing carbon emissions by 2030.",
      image: "/news-3.png",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Latest News
        </h2>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="h-48 w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/" className="text-brand-orange hover:underline">
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-brand-orange font-semibold hover:bg-brand-orange/90"
          >
            BROWSE ALL NEWS
          </Button>
        </div>
      </div>
    </section>
  );
};

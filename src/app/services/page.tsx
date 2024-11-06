import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/data/services";
import { GetInTouch } from "@/features/public/get-in-touch";

export default function ServicesPage() {
  return (
    <div className="container mx-auto mt-20 max-w-7xl py-10">
      <div className="mb-8 flex w-full justify-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 -z-10 -skew-x-12 bg-gradient-to-r from-orange-200 to-brand-orange"></div>
          <h1 className="relative px-8 py-4 text-center text-3xl font-bold text-gray-700">
            Our Services
          </h1>
        </div>
      </div>
      <Tabs defaultValue={services[0].name} className="w-full">
        <TabsList className="grid w-full grid-cols-1 lg:grid-cols-4">
          {services.map((service) => (
            <TabsTrigger
              key={service.name}
              value={service.name}
              className="text-lg"
            >
              {service.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.name} value={service.name}>
            <div className="mt-32 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
              {service.items.map((item, index) => (
                <Card key={index} className="shadow-md">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16">
        <GetInTouch />
      </div>
    </div>
  );
}

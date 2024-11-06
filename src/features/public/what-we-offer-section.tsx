import { BarChart, Check, Megaphone, Palette, PenTool } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GetInTouch } from "./get-in-touch";

export const WhatWeOfferSection = () => {
  const services = [
    {
      category: "Branding",
      icon: Palette,
      items: [
        "Brand Conceptualization",
        "Brand Identity",
        "Logo Creation",
        "Brand Bible",
        "Packaging Design",
        "Marketing Collateral (Digital and Print)",
        "Rebranding",
      ],
    },
    {
      category: "Strategy Consultation",
      icon: BarChart,
      items: [
        "Audit of current digital assets",
        "Designing a strategic marketing and business development plan",
        "Creation of Integrated Marketing and Communications",
        "Campaign concepts recommendations",
        "Mood board creation",
        "Marketing Training for Teams",
        "Marketing Audit",
      ],
    },
    {
      category: "Digital Marketing",
      icon: Megaphone,
      items: [
        "Overall Planning and Execution of Digital Marketing Campaigns",
        "Insights Analysis and Pivoting",
        "Market Research",
        "Competitors Analysis",
        "Digital Media Ads Targeting",
        "Social Media Management",
      ],
    },
    {
      category: "Content Creation",
      icon: PenTool,
      items: [
        "Content Planning & Creation (with Gfx & Copy)",
        "Product shoot",
        "Videography",
        "Video Editing",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          What We Offer
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          <span className="font-semibold">Rocketella Studios</span> offers a
          wide array of marketing and creative services done with passion and
          dedication to satisfy customer demands and brand requirements.
        </p>
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-primary">
                  {<service.icon className="h-6 w-6 text-brand-orange" />}
                  {service.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <GetInTouch />
      </div>
    </section>
  );
};

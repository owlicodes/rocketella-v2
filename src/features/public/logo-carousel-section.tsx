import Image from "next/image";

export const LogoCarouselSection = () => {
  const logos = [
    { src: "/canva.svg", alt: "Canva" },
    { src: "/jbl.svg", alt: "JBL" },
    { src: "/apple.svg", alt: "Apple" },
    { src: "/uber-eats.svg", alt: "Uber Eats" },
    { src: "/mcdo.svg", alt: "Mcdonalds" },
    { src: "/netflix.png", alt: "Netflix" },
  ];

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center justify-center whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-4 w-[100px] flex-shrink-0 md:mx-12"
              >
                {logo.alt === "Netflix" ? (
                  <Image src={logo.src} alt={logo.alt} width={30} height={30} />
                ) : (
                  <Image src={logo.src} alt={logo.alt} width={50} height={50} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

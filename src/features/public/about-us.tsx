import { Eye, Lightbulb, Palette, PenTool, Rocket } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="mb-8 flex items-center justify-center text-brand-orange">
          <Rocket className="mr-2 h-8 w-8" />
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>

        <h2 className="mb-6 text-center text-2xl font-semibold">
          We transform brands into an experience.
        </h2>

        <p className="mb-12 text-center text-lg">
          Rocketella Studios is a premier marketing and creative agency in the
          Philippines that handcrafts unique digital experience for modern
          businesses of various types and sizes.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-start">
            <Palette className="mr-4 mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brand-orange">
                Branding
              </h3>
              <p>Crafting unique brand identities</p>
            </div>
          </div>

          <div className="flex items-start">
            <Eye className="mr-4 mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brand-orange">
                Visual Marketing
              </h3>
              <p>Creating impactful visual strategies</p>
            </div>
          </div>

          <div className="flex items-start">
            <PenTool className="mr-4 mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brand-orange">
                Content Creation
              </h3>
              <p>Developing engaging and relevant content</p>
            </div>
          </div>

          <div className="flex items-start">
            <Lightbulb className="mr-4 mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brand-orange">
                Marketing Consultancy
              </h3>
              <p>Providing expert marketing guidance</p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-lg">
          We have an in-house team of sharply creative artists, writers, and
          brand strategists who have all the nuts and bolts to make business
          stand out and make brands matter.
        </p>
      </div>
    </section>
  );
};

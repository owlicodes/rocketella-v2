import { CheckCircle, ThumbsUp, Users } from "lucide-react";

import { StatItem } from "./stat-item";

export const StatsSection = () => {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StatItem Icon={CheckCircle} value="88" label="Completed Projects" />
          <StatItem Icon={Users} value="507" label="Happy Customers" />
          <StatItem Icon={ThumbsUp} value="375" label="Positive Feedbacks" />
        </div>
      </div>
    </section>
  );
};

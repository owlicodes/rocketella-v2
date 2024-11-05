type StatItemProps = {
  Icon: ({ className }: { className: string }) => React.ReactNode;
  value: string;
  label: string;
};

export const StatItem = ({ Icon, value, label }: StatItemProps) => {
  return (
    <div className="rounded-lg bg-white bg-opacity-10 p-6 text-center transition-transform hover:scale-105">
      <Icon className="mx-auto mb-4 h-12 w-12 text-white" />
      <div className="mb-2 text-4xl font-bold text-brand-orange">{value}</div>
      <div className="text-lg text-purple-100">{label}</div>
    </div>
  );
};

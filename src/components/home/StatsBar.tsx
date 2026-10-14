import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section
      aria-label="Company statistics"
      className="border-b border-orange-600/30 bg-orange-500 py-5"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-2 text-center lg:px-4"
            >
              <span className="text-xl font-extrabold text-white sm:text-2xl">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[11px] font-medium text-blue-100 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

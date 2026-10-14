import { BRANDS } from "@/lib/constants";

export function BrandsSection() {
  return (
    <section className="border-y border-slate-100 bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            Brands We Service
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-800 sm:text-3xl">
            All Major Appliance Brands
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600">
            Professional repair for every major brand. Don&apos;t see yours?
            Call us — we likely repair it.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-navy-800 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            >
              {brand}
            </span>
          ))}
          <span className="rounded-lg border border-dashed border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-500">
            + Many More
          </span>
        </div>
      </div>
    </section>
  );
}

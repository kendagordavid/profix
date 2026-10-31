import Image from "next/image";
import Link from "next/link";
import { AirVent, ArrowRight } from "lucide-react";
import { APPLIANCES_WE_HANDLE } from "@/lib/constants";

export function AppliancesWeHandle() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
              Appliances We Handle
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              From everyday home appliances to commercial equipment.
            </p>
          </div>
          <Link
            href="/appliances"
            className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            View all appliances
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          data-stagger
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        >
          {APPLIANCES_WE_HANDLE.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="relative h-32 overflow-hidden bg-slate-50">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1280px) 170px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
                    <AirVent
                      aria-label={category.title}
                      className="h-14 w-14 text-orange-500 transition duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold text-navy-800">{category.title}</h3>
                <ul className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1.5 text-xs leading-snug text-slate-600"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

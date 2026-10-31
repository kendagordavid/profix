import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  Hotel,
  Landmark,
  Store,
  User,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import {
  BUSINESS_AUDIENCES,
  BUSINESS_SERVICES,
  DEVELOPER_SERVICES,
  PROJECT_TYPES,
  PROJECT_WORKFLOW,
} from "@/lib/constants";

const AUDIENCE_ICONS = {
  user: User,
  building: Building,
  utensils: UtensilsCrossed,
  briefcase: Briefcase,
  landmark: Landmark,
  store: Store,
} as const;

/** Stand-in for a project photo until real images are supplied. */
export function IllustrationPanel({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-orange-600 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-orange-400/30 blur-2xl" />
      <Icon className="relative h-16 w-16 text-white/90" strokeWidth={1.25} />
    </div>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectWorkflow() {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-navy-800">
        Project Workflow
      </p>
      <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-lg bg-orange-50 px-4 py-3">
        {PROJECT_WORKFLOW.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5 text-xs font-semibold text-orange-600">
            {index > 0 && <ArrowRight className="h-3 w-3 text-orange-300" aria-hidden="true" />}
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function DevelopersPanel() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 sm:grid-cols-[150px_1fr] xl:grid-cols-[110px_1fr_150px]">
        <IllustrationPanel icon={Building2} className="h-40 rounded-xl sm:h-full" />
        <div>
          <h3 className="text-xl font-extrabold text-navy-800">
            Developers &amp; Property Projects
          </h3>
          <p className="mt-1 text-sm font-semibold text-orange-500">
            From specification to handover.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Complete appliance solutions for residential and commercial
            developments.
          </p>
          <div className="mt-4">
            <CheckList items={DEVELOPER_SERVICES} />
          </div>
          <Link href="/projects" className="btn-primary mt-5">
            Discuss Your Project
          </Link>
        </div>
        <div className="rounded-xl bg-surface-muted p-4 sm:col-span-2 xl:col-span-1">
          <p className="text-xs font-bold uppercase tracking-wider text-navy-800">
            Project Types
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 xl:grid-cols-1">
            {PROJECT_TYPES.map((type) => (
              <li key={type} className="flex items-center gap-2 text-xs text-slate-600">
                <Building className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProjectWorkflow />
    </div>
  );
}

export function BusinessPanel() {
  return (
    <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_170px] sm:p-6">
      <div>
        <h3 className="text-xl font-extrabold text-navy-800">
          Business &amp; Property Solutions
        </h3>
        <p className="mt-1 text-sm font-semibold text-orange-500">
          Keep your operations running.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          For landlords, property managers, hotels, restaurants, offices,
          institutions and businesses.
        </p>
        <div className="mt-4">
          <CheckList items={BUSINESS_SERVICES} />
        </div>
        <Link href="/commercial" className="btn-primary mt-5">
          Talk to Business Services
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <IllustrationPanel icon={Hotel} className="h-36 rounded-xl" />
        <div className="rounded-xl bg-surface-muted p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-navy-800">
            We support
          </p>
          <ul className="mt-3 space-y-2">
            {BUSINESS_AUDIENCES.map((audience) => {
              const Icon = AUDIENCE_ICONS[audience.icon];
              return (
                <li key={audience.label} className="flex items-center gap-2 text-xs text-slate-600">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                  {audience.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PropertySolutions() {
  return (
    <section className="bg-surface-muted py-14 lg:py-16">
      <div data-stagger className="mx-auto grid max-w-7xl gap-6 px-4 lg:px-6 xl:grid-cols-2">
        <DevelopersPanel />
        <BusinessPanel />
      </div>
    </section>
  );
}

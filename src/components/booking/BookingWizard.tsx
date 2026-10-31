"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { APPLIANCES } from "@/content/appliances";
import { AREAS } from "@/content/areas";
import { BRANDS } from "@/content/brands";
import { ISSUE_OPTIONS, SITE } from "@/lib/constants";
import { bookingWhatsAppMessage, whatsAppUrl } from "@/lib/whatsapp";
import type { BookingSubmitPayload } from "@/lib/validators";

const STORAGE_KEY = "profix-booking-draft";
const STEPS = [
  "Appliance",
  "Brand & issue",
  "Location",
  "Schedule",
  "Details",
] as const;

type Draft = Partial<BookingSubmitPayload> & { step?: number };

function loadDraft(): Draft {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Draft) : {};
  } catch {
    return {};
  }
}

function saveDraft(draft: Draft) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export function BookingWizard() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<Draft>({});
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fromUrl: Draft = {
      appliance: searchParams.get("appliance") ?? undefined,
      brand: searchParams.get("brand") ?? undefined,
      issue: searchParams.get("issue") ?? undefined,
      area: searchParams.get("area") ?? undefined,
      plan: (searchParams.get("plan") as Draft["plan"]) ?? undefined,
      step: searchParams.get("step")
        ? Number(searchParams.get("step")) - 1
        : undefined,
    };
    const stored = loadDraft();
    const merged = { ...stored, ...fromUrl };
    setDraft(merged);
    const initialStep =
      fromUrl.step != null && !Number.isNaN(fromUrl.step)
        ? Math.min(Math.max(fromUrl.step, 0), 4)
        : merged.appliance
          ? 1
          : 0;
    setStep(initialStep);
  }, [searchParams]);

  const update = useCallback((patch: Draft) => {
    setDraft((prev) => {
      const next = { ...prev, ...patch };
      saveDraft(next);
      return next;
    });
  }, []);

  const canNext = useMemo(() => {
    switch (step) {
      case 0:
        return Boolean(draft.appliance);
      case 1:
        return Boolean(draft.brand && draft.issue);
      case 2:
        return Boolean(draft.area);
      case 3:
        return Boolean(draft.scheduleDate && draft.scheduleWindow);
      case 4:
        return Boolean(draft.name && draft.phone);
      default:
        return false;
    }
  }, [step, draft]);

  async function handleSubmit() {
    setError(null);
    setSubmitting(true);
    const payload: BookingSubmitPayload = {
      appliance: draft.appliance!,
      brand: draft.brand!,
      issue: draft.issue!,
      issueOther: draft.issueOther,
      area: draft.area!,
      scheduleDate: draft.scheduleDate!,
      scheduleWindow: draft.scheduleWindow!,
      name: draft.name!,
      phone: draft.phone!.replace(/\s/g, ""),
      email: draft.email ?? "",
      notes: draft.notes,
      plan: draft.plan,
      honeypot: "",
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { reference?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Booking failed");
      setReference(data.reference ?? "PF-LOCAL");
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (reference) {
    const summary = {
      ...draft,
      reference,
    } as BookingSubmitPayload & { reference: string };
    const wa = whatsAppUrl(bookingWhatsAppMessage(summary));

    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-8 w-8" />
        </div>
        <h1 className="mt-4 text-center text-2xl font-extrabold text-navy-800">
          Booking received
        </h1>
        <p className="mt-2 text-center text-sm text-slate-600">
          Reference <strong className="text-navy-800">{reference}</strong>.
          We&apos;ll call you within 15 minutes to confirm your slot.
        </p>
        <p className="mt-4 rounded-lg bg-navy-50 p-4 text-sm text-slate-700">
          Diagnosis from <strong>KSh 1,500</strong> — quote before any work.
          Pay via M-Pesa, cash, or bank transfer after you&apos;re satisfied.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          <Link href="/" className="btn-secondary text-center">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          Book a repair
        </p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy-800">
          Schedule your visit
        </h1>
        <div className="mt-6 flex gap-2">
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={`h-1.5 flex-1 rounded-full ${
                i <= step ? "bg-orange-500" : "bg-slate-200"
              }`}
              aria-hidden
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {step === 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {APPLIANCES.map((a) => (
              <button
                key={a.slug}
                type="button"
                onClick={() => update({ appliance: a.bookValue })}
                className={`rounded-xl border p-4 text-left transition ${
                  draft.appliance === a.bookValue
                    ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100"
                    : "border-slate-200 hover:border-orange-300"
                }`}
              >
                <p className="font-bold text-navy-800">{a.name}</p>
                <p className="mt-1 text-xs text-slate-500">{a.priceHint}</p>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-bold text-navy-800">Brand</p>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => update({ brand: b.name })}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                      draft.brand === b.name
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-200 text-navy-800"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => update({ brand: "Other" })}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                    draft.brand === "Other"
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-slate-200 text-navy-800"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-navy-800">Issue</p>
              <div className="flex flex-wrap gap-2">
                {ISSUE_OPTIONS.map((issue) => (
                  <button
                    key={issue}
                    type="button"
                    onClick={() => update({ issue })}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                      draft.issue === issue
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-200 text-navy-800"
                    }`}
                  >
                    {issue}
                  </button>
                ))}
              </div>
              {draft.issue === "Other" && (
                <input
                  type="text"
                  placeholder="Describe the issue"
                  className="mt-3 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                  value={draft.issueOther ?? ""}
                  onChange={(e) => update({ issueOther: e.target.value })}
                />
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-3 text-sm text-slate-600">
              Select your area — same-day service in most central Nairobi locations.
            </p>
            <div className="flex max-h-64 flex-wrap gap-2 overflow-y-auto">
              {AREAS.map((area) => (
                <button
                  key={area.slug}
                  type="button"
                  onClick={() => update({ area: area.name })}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium ${
                    draft.area === area.name
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-slate-200 text-navy-800"
                  }`}
                >
                  {area.name}
                  {area.sameDay ? " · Same day" : " · Next day"}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-navy-800">Date</label>
              <input
                type="date"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                value={draft.scheduleDate ?? ""}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => update({ scheduleDate: e.target.value })}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-800">Time window</p>
              <p className="text-xs text-slate-500">Mon–Sat, 8:00 AM – 7:00 PM</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    ["morning", "Morning (8–12)"],
                    ["afternoon", "Afternoon (12–4)"],
                    ["evening", "Evening (4–7)"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update({ scheduleWindow: value })}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${
                      draft.scheduleWindow === value
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="rounded-lg bg-navy-50 p-4 text-sm text-slate-700">
              <p className="font-bold text-navy-800">Summary</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>{draft.appliance}</li>
                <li>
                  {draft.brand} — {draft.issue}
                </li>
                <li>{draft.area}</li>
                <li>
                  {draft.scheduleDate} ({draft.scheduleWindow})
                </li>
              </ul>
              <p className="mt-3 text-xs">
                Diagnosis from <strong>KSh 1,500</strong>. Standard repair from{" "}
                <strong>KSh 3,500</strong>. No obligation until you approve the quote.
              </p>
            </div>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <div>
              <label className="text-sm font-bold text-navy-800">Full name</label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                value={draft.name ?? ""}
                onChange={(e) => update({ name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-navy-800">Phone</label>
              <input
                required
                type="tel"
                placeholder="0740 405 420"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                value={draft.phone ?? ""}
                onChange={(e) => update({ phone: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-navy-800">Email (optional)</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                value={draft.email ?? ""}
                onChange={(e) => update({ email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-navy-800">Notes (optional)</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                value={draft.notes ?? ""}
                onChange={(e) => update({ notes: e.target.value })}
              />
            </div>
            {error && (
              <p className="text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-orange-500 hover:text-orange-600"
          >
            Prefer WhatsApp?
          </a>
          <div className="flex gap-2">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-navy-800"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                disabled={!canNext}
                onClick={() => setStep((s) => s + 1)}
                className="btn-primary px-5 py-2 disabled:opacity-40"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={!canNext || submitting}
                onClick={handleSubmit}
                className="btn-primary px-5 py-2 disabled:opacity-40"
              >
                {submitting ? "Sending…" : "Confirm booking"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

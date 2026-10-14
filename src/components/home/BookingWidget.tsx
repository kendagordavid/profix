"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import {
  APPLIANCE_OPTIONS,
  BRAND_OPTIONS,
  ISSUE_OPTIONS,
  SITE,
} from "@/lib/constants";

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm text-slate-600 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

export function BookingWidget() {
  const [appliance, setAppliance] = useState("");
  const [brand, setBrand] = useState("");
  const [issue, setIssue] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "New repair booking request:",
      appliance && `Appliance: ${appliance}`,
      brand && `Brand: ${brand}`,
      issue && `Issue: ${issue}`,
      location && `Location: ${location}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      id="book"
      className="w-full max-w-[340px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xl"
    >
      <div className="border-b-4 border-orange-500 bg-white px-6 pb-4 pt-6 text-center">
        <h3 className="text-xl font-extrabold text-navy-800">Book a Repair Now</h3>
        <p className="mt-1 text-sm text-slate-500">Fast. Easy. Reliable.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 p-5">
        <SelectField
          label="Select Appliance"
          value={appliance}
          onChange={setAppliance}
          options={APPLIANCE_OPTIONS}
        />
        <SelectField
          label="Select Brand"
          value={brand}
          onChange={setBrand}
          options={BRAND_OPTIONS}
        />
        <SelectField
          label="Select Issue"
          value={issue}
          onChange={setIssue}
          options={ISSUE_OPTIONS}
        />
        <input
          type="text"
          placeholder="Enter Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-4 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-slate-50 px-5 py-4 text-center text-xs text-slate-500">
        or call us directly
        <a
          href={SITE.phoneHref}
          className="flex items-center gap-1 font-bold text-navy-700 hover:text-orange-500"
        >
          <Phone className="h-3.5 w-3.5" />
          {SITE.phone}
        </a>
      </p>
    </div>
  );
}

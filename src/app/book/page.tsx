import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Repair",
  description:
    "Schedule appliance repair in Nairobi. Choose appliance, location, and time — transparent KES pricing and 90-day warranty.",
  path: "/book",
});

export default function BookPage() {
  return (
    <div className="bg-navy-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Suspense fallback={<p className="text-center text-slate-500">Loading…</p>}>
          <BookingWizard />
        </Suspense>
      </div>
    </div>
  );
}

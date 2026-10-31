import { SITE } from "@/lib/constants";
import type { BookingSubmitPayload } from "@/lib/validators";

export function bookingWhatsAppMessage(
  payload: BookingSubmitPayload & { reference: string }
) {
  const lines = [
    "PROfix booking request",
    `Ref: ${payload.reference}`,
    `Appliance: ${payload.appliance}`,
    `Brand: ${payload.brand}`,
    `Issue: ${payload.issue}${payload.issueOther ? ` (${payload.issueOther})` : ""}`,
    `Area: ${payload.area}`,
    `When: ${payload.scheduleDate} (${payload.scheduleWindow})`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
  ];
  if (payload.notes) lines.push(`Notes: ${payload.notes}`);
  return lines.join("\n");
}

export function whatsAppUrl(text: string) {
  return `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

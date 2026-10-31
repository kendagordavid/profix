import { z } from "zod";

/** Kenyan mobile: 07xx, 01xx, or +2547/1xxxxxxxx */
export const kenyanPhoneSchema = z
  .string()
  .trim()
  .regex(
    /^(\+254|254|0)[17]\d{8}$/,
    "Enter a valid Kenyan number (e.g. 0740 405 420 or +254740405420)"
  );

export const bookingSubmitSchema = z.object({
  appliance: z.string().min(1),
  brand: z.string().min(1),
  issue: z.string().min(1),
  issueOther: z.string().optional(),
  area: z.string().min(1),
  scheduleDate: z.string().min(1),
  scheduleWindow: z.enum(["morning", "afternoon", "evening"]),
  name: z.string().min(2, "Name is required"),
  phone: kenyanPhoneSchema,
  email: z.union([z.string().email(), z.literal("")]).optional(),
  notes: z.string().optional(),
  plan: z.enum(["diagnosis", "standard", "commercial"]).optional(),
  honeypot: z.string().max(0).optional(),
});

export type BookingSubmitPayload = z.infer<typeof bookingSubmitSchema>;

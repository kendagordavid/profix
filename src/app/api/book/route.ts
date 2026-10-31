import { NextResponse } from "next/server";
import { bookingSubmitSchema } from "@/lib/validators";

const rateLimit = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= 8) return false;
  entry.count++;
  return true;
}

function generateReference() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `PF-${n}`;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bookingSubmitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ reference: generateReference() });
  }

  const reference = generateReference();

  // TODO: RESEND_API_KEY — send notification email to business
  // TODO: BOOKING_WEBHOOK_URL — optional WhatsApp/Telegram webhook
  if (process.env.NODE_ENV === "development") {
    console.info("[book]", reference, parsed.data);
  }

  return NextResponse.json({ reference, ok: true });
}

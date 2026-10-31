"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { whatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = message.trim() || "Hello PROfix, I need help with an appliance.";
    window.open(whatsAppUrl(text), "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  }

  return (
    <>
      {open && (
        <div
          id="whatsapp-chat"
          role="dialog"
          aria-label="Chat with PROfix on WhatsApp"
          className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-[300px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl sm:right-6"
        >
          <div className="flex items-center justify-between bg-navy-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-bold text-white">PROfix Support</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-600">
              Hello! Tell us what&apos;s wrong and we&apos;ll reply on WhatsApp.
            </div>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. My fridge isn't cooling"
                aria-label="Your message"
                className="min-w-0 flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400"
              />
              <button
                type="submit"
                className="rounded-md bg-whatsapp px-3 py-2 text-xs font-bold text-white transition hover:bg-whatsapp-hover"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        aria-controls="whatsapp-chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl"
      >
        {!open && (
          <span
            aria-hidden="true"
            className="animate-pulse-ring absolute inset-0 -z-10 rounded-full bg-[#25D366]"
          />
        )}
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </>
  );
}

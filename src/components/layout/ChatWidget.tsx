"use client";

import { SITE } from "@/lib/constants";

export function ChatWidget() {
  return (
    <div className="fixed bottom-24 right-6 z-40 hidden w-[280px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl lg:block">
      <div className="flex items-center justify-between bg-navy-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-sm font-bold text-white">PROfix Support</span>
        </div>
        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-300">
          Online
        </span>
      </div>
      <div className="p-4">
        <div className="mb-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-600">
          Hello! How can we help you today?
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-xs outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400"
          />
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-orange-500 px-3 py-2 text-xs font-bold text-white hover:bg-orange-600"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
}

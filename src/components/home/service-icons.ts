import { CalendarCheck, Lightbulb, Recycle, Settings, Wrench } from "lucide-react";

/** Maps `Service.icon` keys from src/content/services.ts to icons. */
export const SERVICE_ICONS: Record<string, typeof Wrench> = {
  wrench: Wrench,
  settings: Settings,
  tool: CalendarCheck,
  message: Lightbulb,
  refresh: Recycle,
};

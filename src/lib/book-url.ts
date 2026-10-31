export type BookSearchParams = {
  appliance?: string;
  brand?: string;
  issue?: string;
  area?: string;
  service?: string;
  plan?: "diagnosis" | "standard" | "commercial";
  step?: number;
};

export function buildBookUrl(params: BookSearchParams = {}) {
  const search = new URLSearchParams();
  if (params.appliance) search.set("appliance", params.appliance);
  if (params.brand) search.set("brand", params.brand);
  if (params.issue) search.set("issue", params.issue);
  if (params.area) search.set("area", params.area);
  if (params.service) search.set("service", params.service);
  if (params.plan) search.set("plan", params.plan);
  if (params.step != null) search.set("step", String(params.step));
  const q = search.toString();
  return q ? `/book?${q}` : "/book";
}

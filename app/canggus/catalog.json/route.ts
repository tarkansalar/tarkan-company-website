import { CATALOG } from "@/features/canggus/data/catalog";

// Full /canggus product list as a static JSON file (built at compile time).
// The page ships only the first cards + counts; the carousel fetches this
// when the products section comes near the viewport, keeping first-load JS small.
export const dynamic = "force-static";

export function GET() {
  return Response.json(CATALOG, {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}

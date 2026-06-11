import { Accept } from "@/components/sections/Accept";
import { PageNav } from "@/components/nav/PageNav";

export default function AceitarPage() {
  return (
    <main>
      <Accept />
      <PageNav prev="/verdade" next="/fim" />
    </main>
  );
}

import { Choice } from "@/components/sections/Choice";
import { PageNav } from "@/components/nav/PageNav";

export default function EscolhaPage() {
  return (
    <main>
      <Choice />
      <PageNav prev="/capitulos" next="/verdade" />
    </main>
  );
}

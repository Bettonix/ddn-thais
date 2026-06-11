import { Declaration } from "@/components/sections/Declaration";
import { PageNav } from "@/components/nav/PageNav";

export default function VerdadePage() {
  return (
    <main>
      <Declaration />
      <PageNav prev="/nos" next="/aceitar" />
    </main>
  );
}

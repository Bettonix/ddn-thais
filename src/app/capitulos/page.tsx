import { Timeline } from "@/components/sections/Timeline";
import { PageNav } from "@/components/nav/PageNav";

export default function CapitulosPage() {
  return (
    <main>
      <Timeline />
      <PageNav prev="/carta" next="/escolha" />
    </main>
  );
}

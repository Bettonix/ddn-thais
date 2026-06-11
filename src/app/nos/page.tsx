import { Nos } from "@/components/sections/Nos";
import { PageNav } from "@/components/nav/PageNav";

export default function NosPage() {
  return (
    <main>
      <Nos />
      <PageNav prev="/escolha" next="/verdade" />
    </main>
  );
}

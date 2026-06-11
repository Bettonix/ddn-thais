import { Letter } from "@/components/sections/Letter";
import { PageNav } from "@/components/nav/PageNav";

export default function CartaPage() {
  return (
    <main>
      <Letter />
      <PageNav prev="/" next="/capitulos" />
    </main>
  );
}

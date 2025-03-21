import Player from "@/components/player";
import RepertoireTable from "@/components/repertoire-table";
import { Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-10 lg:p-2">
      <div className="mb-10 flex flex-col flex-wrap items-center gap-10 lg:flex-row">
        <Image alt="logo colorau" height={100} width={200} src="/logo.png" />
        <h1 className="text-nowrap text-3xl font-bold">Material de Apoio</h1>
      </div>
      <Link href="/regimento-interno-colorau-2025.pdf">
        <div className="flex w-fit gap-4 rounded-md border p-2 px-3">
          <Compass />
          Acessar Regimento Interno
        </div>
      </Link>
      <Player />
      <RepertoireTable />
    </main>
  );
}

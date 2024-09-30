import RepertoireTable from "@/components/repertoire-table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 lg:p-2">
      <div className="mb-10 flex flex-wrap items-center gap-10">
        <Image alt="logo colorau" height={100} width={200} src="/logo.png" />
        <h1 className="text-3xl font-bold">Material de Apoio</h1>
      </div>
      <RepertoireTable />
    </main>
  );
}

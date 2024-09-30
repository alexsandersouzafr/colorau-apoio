import { MusicItem, repertoire } from "@/public/table-content";
import { Button } from "./ui/button";
import { Asterisk, Download, Headphones, Music } from "lucide-react";
import Link from "next/link";

export default function RepertoireTable() {
  return (
    <div className="flex flex-col gap-10">
      {repertoire.map((music, i) => (
        <MusicCard key={i} music={music} />
      ))}
    </div>
  );
}

function MusicCard({ music }: { music: MusicItem }) {
  const { name, audios, reference, score } = music;
  return (
    <div className="flex flex-col gap-10 rounded-md border p-10 transition-all hover:bg-blue-500/5 hover:shadow-md">
      <h2 className="flex items-center gap-4 text-2xl font-bold uppercase text-black/70">
        <Music />
        {name}
      </h2>
      <div className="flex flex-wrap gap-4">
        {score && (
          <Link href={score}>
            <Button className="w-52 gap-2">
              <Download />
              Baixar Partitura
            </Button>
          </Link>
        )}
        <Link href={reference}>
          <Button variant="outline" className="gap-2">
            <Asterisk />
            Assistir referência
          </Button>
        </Link>
        {audios && (
          <Link href={audios}>
            <Button variant="outline" className="gap-4">
              <Headphones />
              Áudios para estudo
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

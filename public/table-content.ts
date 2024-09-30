export type MusicItem = {
  name: string;
  score?: string;
  reference: string;
  audios?: string;
};

export const repertoire: MusicItem[] = [
  {
    name: "Águas de Março",
    score: "/aguas-de-marco.pdf",
    reference: "https://www.youtube.com/watch?v=vRe1AGRyk94",
    audios:
      "https://drive.google.com/drive/u/1/folders/1xzoEccjJtHEGnzZMO-u_7wTav80QIMyB",
  },
  {
    name: "Bumba Chora",
    score: "/bumba-chora.pdf",
    reference: "https://www.youtube.com/watch?v=vRe1AGRyk94",
    audios:
      "https://drive.google.com/drive/u/1/folders/12OZ42HSfrUV3xsD_NwWy-kewF3Vrt3-a",
  },
  {
    name: "Chiquilin de Bachin",
    score: "/chiquilin.pdf",
    reference: "https://www.youtube.com/watch?v=TWQooUsLinc",
    audios:
      "https://drive.google.com/drive/u/1/folders/12bQr_UCshi9MDaFCAbl_Np5t64uAzzy4",
  },
  {
    name: "Langage",
    score: "/langage.pdf",
    reference: "https://www.youtube.com/watch?v=x0OBeMg-bj8",
  },
  {
    name: "Suíte dos Pescadores",
    score: "/suite-dos-pescadores.pdf",
    reference: "https://www.youtube.com/watch?v=EOEQjHXgcY0",
    audios:
      "https://drive.google.com/drive/u/1/folders/157c7qqoAOfQiSS2Ayr87NqkEh8N00pWr",
  },
  {
    name: "Hymn of the Fayth",
    reference: "https://www.youtube.com/watch?v=FpeqMBG7_7I",
  },
  {
    name: "Baião de Quatro Toques",
    score: "/baiao.pdf",
    reference: "https://www.youtube.com/watch?v=uDeem9Qjmhk",
  },
  {
    name: "Nyon Nyon Nyon",
    score: "/nyon.pdf",
    reference: "https://www.youtube.com/watch?v=WACpvDahUJU",
  },
];

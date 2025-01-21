export type MusicItem = {
  name: string;
  score?: string;
  reference: string;
  audios?: string;
};

export const repertoire: MusicItem[] = [
  {
    name: "Kyrie II",
    reference: "https://www.youtube.com/watch?v=ggnPXtnh9Dw",
    score: "/kyrie-II.pdf",
    audios:
      "https://drive.google.com/drive/folders/1pH3tA_RDJKUk-U8diK-Jf1CqX_syBhc7?usp=sharing",
  },
  {
    name: "Lua, Lua, Lua",
    reference: "https://www.youtube.com/watch?v=NxpWF-jZUR4",
    score: "/lua-lua-lua.pdf",
    audios:
      "https://drive.google.com/drive/folders/1Sn3zLZcXUBvZ97mAp5sq5ZQoqI0vQRgJ?usp=sharing",
  },
  {
    name: "Baião de Quatro Toques",
    score: "/baiao.pdf",
    reference: "https://www.youtube.com/watch?v=uDeem9Qjmhk",
    audios:
      "https://drive.google.com/drive/folders/1wtzXygIKaYhqfufMXyZo8LZDhn5qIdCs?usp=drive_link",
  },
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
];

// Conteúdo centralizado — editar aqui pra mudar o site inteiro

export const CONFIG = {
  TARGET_DATE: "2026-06-12T00:00:00-03:00",
  WHATSAPP_NUMBER: "5565993616302",
  WHATSAPP_MESSAGE: "",
  EASTER_EGG_CLICKS: 7,
};

export function getWhatsAppUrl(): string {
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE)}`;
}

export const MOMENTS = [
  {
    id: "farol",
    date: "i.",
    title: "Farol Bar",
    body: "Você apareceu e eu já sabia. Continuei falando como se não soubesse — esse sempre foi meu talento.",
  },
  {
    id: "outubro",
    date: "ii.",
    title: "Outubro",
    body: "A primeira viagem de muitas. Reservada, sonhada, prometida. Aguarde cenas do próximo capítulo.",
  },
  {
    id: "flor",
    date: "iii.",
    title: "A flor",
    body: "Comprei uma tentando parecer legal. Pesou o clima. Pelo menos a flor era bonita — e você riu, o que valeu mais.",
  },
  {
    id: "profecia",
    date: "iv.",
    title: "A profecia",
    body: "\"A não, pesou o clima agora.\" Virou bordão, virou tradição, virou linguagem própria nossa.",
  },
  {
    id: "memes",
    date: "v.",
    title: "Era dos memes",
    body: "Six seven. Farmar aura. Conversa sem sentido que faz sentido só entre nós. Humor de gente grande que finge entender.",
  },
  {
    id: "hoje",
    date: "vi.",
    title: "Hoje",
    body: "Eu gosto muito de você. E você é do jeito que eu esperei que minha mulher fosse — com o plus de me fazer rir todo dia.",
  },
];

export const CHOICES = [
  { id: "silencio", label: "um dia inteiro em silêncio, só nós dois", correct: false },
  { id: "aventura", label: "um lugar novo pra explorar", correct: false },
  { id: "casa", label: "ficar em casa, com você por perto", correct: false },
  { id: "rir", label: "rir até a barriga doer", correct: false },
  { id: "dormir", label: "dormir no mesmo travesseiro", correct: false },
  { id: "qualquer", label: "qualquer coisa. contanto que seja com você", correct: true },
];

export const DECLARATION =
  "Thais, eu gosto muito de você — de um jeito que eu não sabia que ia caber no peito. Você é do jeito que eu sempre esperei que minha mulher fosse: parceira das minhas bizarrices, cúmplice dos meus memes, e a pessoa com quem eu mais rio no mundo. A gente compartilha as mesmas coisas idiotas, e isso pra mim vale ouro. Você é tudo pra mim, labubuzinha. E eu vou passar a vida inteira te lembrando disso.";

export const LETTER_QUESTION =
  "Se a gente sumisse do mundo por um dia, o que você faria primeiro?";

export const LETTER_ANSWER = "Eu escolheria você. Sempre você.";

export const SONGS: Array<{
  who: string;
  label: string;
  name: string;
  artist: string;
  image: string;
  video: string;
}> = [
  {
    who: "dela",
    label: "A dela",
    name: "Yes to Heaven",
    artist: "Lana Del Rey",
    image: "/media/lana.jpg",
    video: "/media/yes-to-heaven.mp4",
  },
  {
    who: "dele",
    label: "A dele",
    name: "Call Out My Name",
    artist: "The Weeknd",
    image: "/media/the-weeknd.jpg",
    video: "/media/call-out-my-name.mp4",
  },
];

export type Song = (typeof SONGS)[number];

// Música ambiente global
export const AMBIENT = {
  src: "/media/yes-to-heaven.mp4",
  title: "Yes to Heaven",
  artist: "Lana Del Rey",
};

// Capítulo "nós" — fotos do casal
export const NOS = {
  title: "nós dois",
  body: "Pra lembrar que tudo isso aqui é real. Tem cara, tem risada, tem a gente.",
  leftImage: "/media/couple-carlos.jpg",
  leftLabel: "c.",
  rightImage: "/media/couple-thais.jpg",
  rightLabel: "t.",
};

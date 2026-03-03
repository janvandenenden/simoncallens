// ——— Types ———

export type SiteConfig = {
  name: string;
  instagramUrl: string;
  email: { user: string; domain: string };
};

export type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Work = {
  slug: string;
  title: string;
  year: string;
  description?: string;
  images: WorkImage[];
  materials?: string;
  collaboration?: string;
  photoCredit?: string;
};

export type Exhibition = {
  title: string;
  venue: string;
  location: string;
  year: string;
};

export type ContactBlock = {
  label: string;
  lines: string[];
  type?: "email" | "phone" | "address";
};

// ——— Site Config ———

export const siteConfig: SiteConfig = {
  name: "Simon Callens",
  instagramUrl: "https://www.instagram.com/simon.j.callens/",
  email: { user: "info", domain: "simoncallens.com" },
};

// ——— Works ———

export const works: Work[] = [
  {
    slug: "flying-chair",
    title: "Flying Chair",
    year: "2020",
    images: [
      { src: "/works/flying-chair/01.jpg", alt: "Flying Chair — front view", width: 1600, height: 2400 },
      { src: "/works/flying-chair/02.jpg", alt: "Flying Chair — side view", width: 2400, height: 1600 },
      { src: "/works/flying-chair/03.jpg", alt: "Flying Chair — detail", width: 1600, height: 2400 },
      { src: "/works/flying-chair/04.jpg", alt: "Flying Chair — angle view", width: 1600, height: 2400 },
      { src: "/works/flying-chair/05.jpg", alt: "Flying Chair — context", width: 1600, height: 2400 },
    ],
    materials: "Plain Oregon Pine, Cold drawn steel bar",
    collaboration: "Custom made fabric by KRJST studio",
  },
  {
    slug: "bench",
    title: "Bench",
    year: "2020",
    images: [
      { src: "/works/bench/01.jpg", alt: "Bench — front view", width: 2400, height: 1600 },
      { src: "/works/bench/02.jpg", alt: "Bench — side view", width: 1600, height: 2400 },
      { src: "/works/bench/03.jpg", alt: "Bench — detail", width: 2400, height: 1600 },
      { src: "/works/bench/04.jpg", alt: "Bench — angle view", width: 2400, height: 1600 },
      { src: "/works/bench/05.jpg", alt: "Bench — context", width: 2400, height: 1600 },
    ],
    materials: "Steamed beech, Steel profile, Hot drawn steel bar",
    collaboration: "Custom made rope by KRJST studio",
  },
  {
    slug: "beach-chair",
    title: "Beach Chair",
    year: "2021",
    images: [
      { src: "/works/beach-chair/01.jpg", alt: "Beach Chair — front view", width: 1600, height: 2400 },
      { src: "/works/beach-chair/02.jpg", alt: "Beach Chair — side view", width: 2119, height: 2400 },
      { src: "/works/beach-chair/03.jpg", alt: "Beach Chair — detail", width: 1600, height: 2400 },
    ],
    materials: "Steel profile, Cold drawn steel bar, Oxidized copper",
    collaboration: "Custom made fabric by KRJST studio",
  },
  {
    slug: "nikka",
    title: "Nikka",
    year: "2022",
    images: [
      { src: "/works/nikka/01.jpg", alt: "Nikka — front view", width: 2400, height: 1600 },
      { src: "/works/nikka/02.jpg", alt: "Nikka — side view", width: 1600, height: 2400 },
      { src: "/works/nikka/03.jpg", alt: "Nikka — detail", width: 1600, height: 2400 },
      { src: "/works/nikka/04.jpg", alt: "Nikka — angle view", width: 1600, height: 2400 },
      { src: "/works/nikka/05.jpg", alt: "Nikka — context", width: 1600, height: 2400 },
    ],
    materials: "Patinated steel, Solidified fabric, Soja based resin. ",
    collaboration: "Custom made fabric by KRJST studio",
    photoCredit: "Amber Van Bossel",
  },
  {
    slug: "rslt-toga-chair",
    title: "RSLT Toga Chair",
    year: "2022",
    images: [
      { src: "/works/rslt-toga-chair/01.jpg", alt: "RSLT Toga Chair — front view", width: 1600, height: 2400 },
      { src: "/works/rslt-toga-chair/02.jpg", alt: "RSLT Toga Chair — side view", width: 1600, height: 2400 },
      { src: "/works/rslt-toga-chair/03.jpg", alt: "RSLT Toga Chair — detail", width: 1600, height: 2400 },
      { src: "/works/rslt-toga-chair/04.jpg", alt: "RSLT Toga Chair — angle view", width: 2400, height: 1600 },
      { src: "/works/rslt-toga-chair/05.jpg", alt: "RSLT Toga Chair — context", width: 1600, height: 2400 },
    ],
    materials: "Fabric, Beech wood, Steel",
    collaboration: "Designed and produced in collaboration with KRJST studio",
  },
  {
    slug: "kaseigan-kasei-hokage",
    title: "Kaseigan Kasei Hokage",
    year: "2024",
    images: [
      { src: "/works/kaseigan-kasei-hokage/01.jpg", alt: "Kaseigan Kasei Hokage — view 1", width: 1599, height: 2400 },
      { src: "/works/kaseigan-kasei-hokage/02.jpg", alt: "Kaseigan Kasei Hokage — view 2", width: 1600, height: 2400 },
      { src: "/works/kaseigan-kasei-hokage/03.jpg", alt: "Kaseigan Kasei Hokage — detail", width: 1600, height: 2400 },
      { src: "/works/kaseigan-kasei-hokage/04.jpg", alt: "Kaseigan Kasei Hokage — context", width: 1600, height: 2400 },
    ],
    materials: "Steel structure.",
    collaboration:
      "Jaquard weaving made by KRJST studio and sculpted into resin",
    photoCredit: "Stan Huaux and Jeremy Marchant",
  },
  {
    slug: "white-fire",
    title: "White Fire",
    year: "2022",
    images: [
      { src: "/works/white-fire/01.jpg", alt: "White Fire — front view", width: 1600, height: 2400 },
      { src: "/works/white-fire/02.jpg", alt: "White Fire — detail", width: 1600, height: 2400 },
      { src: "/works/white-fire/03.jpg", alt: "White Fire — context", width: 1599, height: 2400 },
    ],
    materials: "Patinated steel foot, Soja based resin ",
    collaboration: "Solidified fabric by KRJST studio",
    photoCredit: "Stan Huaux and Jeremy Marchant",
  },
  {
    slug: "hibiki",
    title: "Hibiki",
    year: "2025",
    images: [
      { src: "/works/hibiki/01.jpg", alt: "Hibiki — front view", width: 1920, height: 2400 },
      { src: "/works/hibiki/02.jpg", alt: "Hibiki — side view", width: 1714, height: 2400 },
      { src: "/works/hibiki/03.jpg", alt: "Hibiki — detail", width: 1919, height: 2400 },
      { src: "/works/hibiki/04.jpg", alt: "Hibiki — angle view", width: 1919, height: 2400 },
      { src: "/works/hibiki/05.jpg", alt: "Hibiki — context", width: 1920, height: 2400 },
    ],
    materials: "Patinated steel",
    collaboration: "Jacquard weaving by KRJST studio",
  },
  {
    slug: "akashi",
    title: "Akashi",
    year: "2025",
    images: [
      { src: "/works/akashi/01.jpg", alt: "Akashi — view 1", width: 1600, height: 2400 },
      { src: "/works/akashi/02.jpg", alt: "Akashi — view 2", width: 1714, height: 2400 },
      { src: "/works/akashi/03.jpg", alt: "Akashi — detail", width: 1600, height: 2400 },
      { src: "/works/akashi/04.jpg", alt: "Akashi — context", width: 1714, height: 2400 },
    ],
    materials: "Patinated steel",
    collaboration: "Jacquard weaving by KRJST studio",
  },
  {
    slug: "himoto-table",
    title: "Himoto Table",
    year: "2024",
    images: [
      { src: "/works/himoto-table/01.jpg", alt: "Himoto Table — front view", width: 1600, height: 2400 },
      { src: "/works/himoto-table/02.jpg", alt: "Himoto Table — detail", width: 1600, height: 2400 },
      { src: "/works/himoto-table/03.jpg", alt: "Himoto Table — context", width: 1600, height: 2400 },
    ],
    materials: "Steel, Soja based resin, Fabric",
    collaboration: "Designed and produced in collaboration with KRJST studio",
  },
  {
    slug: "suggi",
    title: "Suggi",
    year: "2022",
    images: [
      { src: "/works/suggi/01.jpg", alt: "Suggi — front view", width: 2400, height: 2340 },
      { src: "/works/suggi/02.jpg", alt: "Suggi — side view", width: 1560, height: 2400 },
      { src: "/works/suggi/03.jpg", alt: "Suggi — detail", width: 1855, height: 2400 },
      { src: "/works/suggi/04.jpg", alt: "Suggi — angle view", width: 2365, height: 2400 },
      { src: "/works/suggi/05.jpg", alt: "Suggi — context", width: 2400, height: 1827 },
    ],
    materials: "Patinated steel, Thermoformed plexiglass",
    collaboration: "Jacquard weaving by KRJST studio",
  },
];

// ——— Exhibitions ———

export const exhibitions: Exhibition[] = [];

// ——— About ———

export const aboutText = `Simon-Jacob Callens develops objects where refinement and tension
converge. Drawn to elemental materials and the forces embedded within
them, he investigates how underlying pressures translate into form, how
tension becomes order, and how simplicity can carry weight.

Raised in Bruges in the atelier of his father, a graphic artist, he developed
an early sensitivity to material and composition. He later studied
photography and scenography, designing animatronic sculptures for
theatre. That experience sharpened his instinct for control, choreography,
and spatial presence.

Today, his practice unfolds through functional and sculptural objects in
copper, patinated steel, and wood. Each piece is precise in proportion and
restrained in gesture. Within that restraint, an unexpected detail quietly
shifts the whole.

Each work stands on its own, a self-contained object in which matter,
balance, and presence converge.`;

// ——— Contact ———

export const contactBlocks: ContactBlock[] = [
  {
    label: "Workshop",
    lines: [
      "Zaventem Ateliers",
      "Fabrieksstraat 15 - 19",
      "1930 Zaventem, Belgium",
    ],
    type: "address",
  },
  {
    label: "Phone",
    lines: ["+32 474 33 02 31"],
    type: "phone",
  },
  {
    label: "Info",
    lines: [],
    type: "email",
  },
  {
    label: "Business",
    lines: [
      "Tentoon CommV",
      "Oude Zak 35",
      "8000 Bruges, Belgium",
      "BE 0719 782 065",
    ],
  },
];

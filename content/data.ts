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
    year: "2024",
    images: [
      {
        src: "/works/flying-chair/01.jpg",
        alt: "Flying Chair — front view",
        width: 3264,
        height: 4896,
      },
      {
        src: "/works/flying-chair/02.jpg",
        alt: "Flying Chair — side view",
        width: 4896,
        height: 3264,
      },
      {
        src: "/works/flying-chair/03.jpg",
        alt: "Flying Chair — detail",
        width: 3264,
        height: 4896,
      },
      {
        src: "/works/flying-chair/04.jpg",
        alt: "Flying Chair — angle view",
        width: 3264,
        height: 4896,
      },
      {
        src: "/works/flying-chair/05.jpg",
        alt: "Flying Chair — context",
        width: 3172,
        height: 4758,
      },
    ],
    materials: "Steel, wood",
  },
  {
    slug: "bench",
    title: "Bench",
    year: "2024",
    images: [
      {
        src: "/works/bench/01.jpg",
        alt: "Bench — front view",
        width: 4896,
        height: 3264,
      },
      {
        src: "/works/bench/02.jpg",
        alt: "Bench — side view",
        width: 3264,
        height: 4896,
      },
      {
        src: "/works/bench/03.jpg",
        alt: "Bench — detail",
        width: 4659,
        height: 3106,
      },
      {
        src: "/works/bench/04.jpg",
        alt: "Bench — angle view",
        width: 4896,
        height: 3264,
      },
      {
        src: "/works/bench/05.jpg",
        alt: "Bench — context",
        width: 4896,
        height: 3264,
      },
    ],
    materials: "Wood",
  },
  {
    slug: "beach-chair",
    title: "Beach Chair",
    year: "2024",
    images: [
      {
        src: "/works/beach-chair/01.jpg",
        alt: "Beach Chair — front view",
        width: 3225,
        height: 4838,
      },
      {
        src: "/works/beach-chair/02.jpg",
        alt: "Beach Chair — side view",
        width: 4896,
        height: 5545,
      },
      {
        src: "/works/beach-chair/03.jpg",
        alt: "Beach Chair — detail",
        width: 3264,
        height: 4896,
      },
    ],
    materials: "Wood, textile",
  },
  {
    slug: "nikka",
    title: "Nikka",
    year: "2023",
    images: [
      {
        src: "/works/nikka/01.jpg",
        alt: "Nikka — front view",
        width: 5984,
        height: 3989,
      },
      {
        src: "/works/nikka/02.jpg",
        alt: "Nikka — side view",
        width: 3917,
        height: 5876,
      },
      {
        src: "/works/nikka/03.jpg",
        alt: "Nikka — detail",
        width: 4000,
        height: 6000,
      },
      {
        src: "/works/nikka/04.jpg",
        alt: "Nikka — angle view",
        width: 4000,
        height: 6000,
      },
      {
        src: "/works/nikka/05.jpg",
        alt: "Nikka — context",
        width: 4000,
        height: 6000,
      },
    ],
    materials: "Wood",
  },
  {
    slug: "rslt-toga-chair",
    title: "RSLT Toga Chair",
    year: "2023",
    images: [
      {
        src: "/works/rslt-toga-chair/01.jpg",
        alt: "RSLT Toga Chair — front view",
        width: 3133,
        height: 4699,
      },
      {
        src: "/works/rslt-toga-chair/02.jpg",
        alt: "RSLT Toga Chair — side view",
        width: 3011,
        height: 4517,
      },
      {
        src: "/works/rslt-toga-chair/03.jpg",
        alt: "RSLT Toga Chair — detail",
        width: 3264,
        height: 4896,
      },
      {
        src: "/works/rslt-toga-chair/04.jpg",
        alt: "RSLT Toga Chair — angle view",
        width: 4896,
        height: 3264,
      },
      {
        src: "/works/rslt-toga-chair/05.jpg",
        alt: "RSLT Toga Chair — context",
        width: 3264,
        height: 4896,
      },
    ],
    materials: "Steel, fabric",
    collaboration: "RSLT",
  },
  {
    slug: "kaseigan-kasei-hokage",
    title: "Kaseigan Kasei Hokage",
    year: "2023",
    images: [
      {
        src: "/works/kaseigan-kasei-hokage/01.jpg",
        alt: "Kaseigan Kasei Hokage — view 1",
        width: 2708,
        height: 4063,
      },
      {
        src: "/works/kaseigan-kasei-hokage/02.jpg",
        alt: "Kaseigan Kasei Hokage — view 2",
        width: 2806,
        height: 4209,
      },
      {
        src: "/works/kaseigan-kasei-hokage/03.jpg",
        alt: "Kaseigan Kasei Hokage — detail",
        width: 2824,
        height: 4235,
      },
      {
        src: "/works/kaseigan-kasei-hokage/04.jpg",
        alt: "Kaseigan Kasei Hokage — context",
        width: 2752,
        height: 4128,
      },
    ],
    materials: "Mixed media",
  },
  {
    slug: "white-fire",
    title: "White Fire",
    year: "2022",
    images: [
      {
        src: "/works/white-fire/01.jpg",
        alt: "White Fire — front view",
        width: 2848,
        height: 4272,
      },
      {
        src: "/works/white-fire/02.jpg",
        alt: "White Fire — detail",
        width: 4020,
        height: 6030,
      },
      {
        src: "/works/white-fire/03.jpg",
        alt: "White Fire — context",
        width: 2724,
        height: 4087,
      },
    ],
    materials: "Ceramic",
  },
  {
    slug: "hibiki",
    title: "Hibiki",
    year: "2022",
    images: [
      {
        src: "/works/hibiki/01.jpg",
        alt: "Hibiki — front view",
        width: 1920,
        height: 2400,
      },
      {
        src: "/works/hibiki/02.jpg",
        alt: "Hibiki — side view",
        width: 1714,
        height: 2400,
      },
      {
        src: "/works/hibiki/03.jpg",
        alt: "Hibiki — detail",
        width: 1638,
        height: 2048,
      },
      {
        src: "/works/hibiki/04.jpg",
        alt: "Hibiki — angle view",
        width: 1638,
        height: 2048,
      },
      {
        src: "/works/hibiki/05.jpg",
        alt: "Hibiki — context",
        width: 1920,
        height: 2400,
      },
    ],
    materials: "Wood",
  },
  {
    slug: "akashi",
    title: "Akashi",
    year: "2022",
    images: [
      {
        src: "/works/akashi/01.jpg",
        alt: "Akashi — view 1",
        width: 1600,
        height: 2400,
      },
      {
        src: "/works/akashi/02.jpg",
        alt: "Akashi — view 2",
        width: 1714,
        height: 2400,
      },
      {
        src: "/works/akashi/03.jpg",
        alt: "Akashi — detail",
        width: 1600,
        height: 2400,
      },
      {
        src: "/works/akashi/04.jpg",
        alt: "Akashi — context",
        width: 1714,
        height: 2400,
      },
    ],
    materials: "Wood",
  },
  {
    slug: "himoto-table",
    title: "Himoto Table",
    year: "2022",
    images: [
      {
        src: "/works/himoto-table/01.jpg",
        alt: "Himoto Table — front view",
        width: 2645,
        height: 3967,
      },
      {
        src: "/works/himoto-table/02.jpg",
        alt: "Himoto Table — detail",
        width: 2824,
        height: 4236,
      },
      {
        src: "/works/himoto-table/03.jpg",
        alt: "Himoto Table — context",
        width: 2896,
        height: 4344,
      },
    ],
    materials: "Wood",
  },
  {
    slug: "suggi",
    title: "Suggi",
    year: "2021",
    images: [
      {
        src: "/works/suggi/01.jpg",
        alt: "Suggi — front view",
        width: 4645,
        height: 4530,
      },
      {
        src: "/works/suggi/02.jpg",
        alt: "Suggi — side view",
        width: 3512,
        height: 5401,
      },
      {
        src: "/works/suggi/03.jpg",
        alt: "Suggi — detail",
        width: 3512,
        height: 4544,
      },
      {
        src: "/works/suggi/04.jpg",
        alt: "Suggi — angle view",
        width: 4276,
        height: 4339,
      },
      {
        src: "/works/suggi/05.jpg",
        alt: "Suggi — context",
        width: 4613,
        height: 3512,
      },
    ],
    materials: "Wood",
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
      "Leuvensesteenweg 86",
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
    lines: ["Tentoon CommV", "Bruges, Belgium"],
  },
];

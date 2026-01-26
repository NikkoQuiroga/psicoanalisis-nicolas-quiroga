import Nostalgia from "./Nostalgia.jsx";
import Ikigai from "./Ikigai.jsx";
import ZenOscura from "./ZenOscura.jsx";
import Autosabotaje from "./Autosabotaje.jsx";
import AngustiaExistencial from "./AngustiaExistencial.jsx";

export const posts = [
  {
    slug: "angustia-existencial-sentido-de-la-vida",
    title: "Angustia existencial: cuando la vida pierde sentido y cómo encontrarlo",
    description:
      "Qué es la angustia existencial, por qué aparece aunque “todo esté bien”, y cómo recuperar sentido con Frankl, Hegel y Žižek.",
    date: "2025-09-12",
    tags: [
      "Angustia existencial",
      "Sentido de la vida",
      "Logoterapia",
      "Vínculos",
      "Psicoanálisis",
    ],
    readMinutes: 9,
    hero: "/media/lic-rodrigo-nicolas-quiroga-martinez.webp",
    Component: AngustiaExistencial,
  },
  {
    slug: "por-que-nos-autosaboteamos-romper-ciclo-autosabotaje",
    title: "¿Por qué nos autosaboteamos? Cómo romper el ciclo del autosabotaje",
    description:
      "Entendé por qué repetís conductas que te dañan: procrastinación, vínculos, proyectos. Goce, miedo al cambio y una guía práctica para cortar el ciclo.",
    date: "2025-09-10",
    tags: [
      "Autosabotaje",
      "Procrastinación",
      "Psicoanálisis",
      "Autoexigencia",
      "Vínculos",
    ],
    readMinutes: 10,
    hero: "/media/autosabotaje-hero.svg",
    Component: Autosabotaje,
  },
  {
    slug: "oscura-verdad-budismo-zen",
    title: "La oscura verdad del budismo zen",
    description:
      "Una lectura crítico-psicoanalítica del zen: desapego, metanarrativas y condiciones materiales del sufrimiento.",
    date: "2025-09-07", // ajustá si querés
    tags: ["Budismo zen", "Psicoanálisis", "Crítica cultural", "Žižek", "Japón"],
    readMinutes: 7,
    hero: "/media/zen-hero.webp", // opcional
    Component: ZenOscura,
  },
  {
    slug: "ikigai-formula-secreta-japonesa-felicidad",
    title: "Ikigai, la “fórmula secreta japonesa” para la felicidad",
    description:
      "Qué es realmente el ikigai y cómo leerlo desde el psicoanálisis: menos receta universal, más causa que alimente el deseo.",
    date: "2025-09-07",
    tags: ["Japón", "Ikigai", "Psicoanálisis", "Cultura"],
    readMinutes: 6,
    hero: "/media/ikigai-hero.webp",
    Component: Ikigai,
  },
  {
    slug: "nostalgia-puente-japon-psicoanalisis",
    title: "La nostalgia: un puente entre Japón y el psicoanálisis",
    description:
      "Mono no aware y psicoanálisis: cómo la nostalgia señala pérdidas y vacíos, y qué podemos hacer con eso en terapia.",
    date: "2025-09-05",
    tags: ["Psicoanálisis", "Japón", "Nostalgia", "mono no aware"],
    readMinutes: 6,
    hero: "/media/nostalgia-hero.webp",
    Component: Nostalgia,
  },
];

import Nostalgia from "./Nostalgia.jsx";
import Ikigai from "./Ikigai.jsx";
import ZenOscura from "./ZenOscura.jsx";
import Autosabotaje from "./Autosabotaje.jsx";
import AngustiaExistencial from "./AngustiaExistencial.jsx";
import AnsiedadVidaModerna from "./AnsiedadVidaModerna.jsx";
import PsicoanalisisPseudociencia from "./PsicoanalisisPseudociencia.jsx";
import TerapiaCrisisEconomica from "./TerapiaCrisisEconomica.jsx";

export const posts = [
  {
    slug: "terapia-en-crisis-economica",
    title:
      "Terapia en crisis económica: por qué sostener el proceso también es salud mental",
    description:
      "Cómo sostener terapia durante una crisis económica: frecuencia posible, modalidad flexible y trabajo clínico para reducir ansiedad y culpa individual.",
    date: "2026-03-06",
    tags: [
      "Terapia en crisis económica",
      "Ansiedad económica",
      "Psicoanálisis",
      "Salud mental",
      "Honorarios",
    ],
    readMinutes: 8,
    hero: "/media/lic-rodrigo-nicolas-quiroga-martinez.webp",
    Component: TerapiaCrisisEconomica,
  },
  {
    slug: "psicoanalisis-es-pseudociencia-lacan",
    title:
      "¿El psicoanálisis es una pseudociencia? La respuesta incómoda que casi nadie explica bien",
    description:
      "Debate serio sobre si el psicoanálisis es pseudociencia: Lacan, formalización, topología, criterios de cientificidad y diferencias con TCC/conductismo.",
    date: "2026-03-04",
    tags: [
      "Psicoanálisis es pseudociencia",
      "Lacan",
      "Inconsciente estructurado como un lenguaje",
      "Topología lacaniana",
      "Nudo borromeo",
      "Cientificidad del psicoanálisis",
      "Lakatos",
      "Psicoanálisis vs TCC",
    ],
    readMinutes: 11,
    hero: "/media/psicoanalisis-es-pseudociencia-lacan.webp",
    Component: PsicoanalisisPseudociencia,
  },
  {
    slug: "ansiedad-vida-moderna-aumento-como-manejarla",
    title: "Ansiedad en la vida moderna: por qué va en aumento y cómo manejarla",
    description:
      "La ansiedad crece con estrés laboral, hiperconectividad e incertidumbre económica. Un análisis con Marx, Lacan y Žižek, y una práctica respiratoria breve.",
    date: "2025-09-14",
    tags: [
      "Ansiedad en la vida moderna",
      "Síntomas de ansiedad",
      "Ataques de pánico",
      "Estrés laboral",
      "Hiperconectividad",
      "Incertidumbre económica",
      "Plusvalía",
      "Objeto a",
      "Goce",
      "Plus-de-goce",
      "Superyó contemporáneo",
    ],
    readMinutes: 12,
    hero: "/media/ansiedad-vida-moderna-aumento-como-manejarla.webp",
    Component: AnsiedadVidaModerna,
  },
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
    hero: "/media/angustia-existencial-sentido-de-la-vida.webp",
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
    hero: "/media/por-que-nos-autosaboteamos-romper-ciclo-autosabotaje.webp",
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
    hero: "/media/oscura-verdad-budismo-zen.webp", // opcional
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
    hero: "/media/ikigai-formula-secreta-japonesa-felicidad.webp",
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
    hero: "/media/nostalgia-puente-japon-psicoanalisis.webp",
    Component: Nostalgia,
  },
];

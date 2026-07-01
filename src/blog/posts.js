import { lazy } from "react";

const Nostalgia                    = lazy(() => import("./Nostalgia.jsx"));
const Ikigai                       = lazy(() => import("./Ikigai.jsx"));
const ZenOscura                    = lazy(() => import("./ZenOscura.jsx"));
const Autosabotaje                 = lazy(() => import("./Autosabotaje.jsx"));
const AngustiaExistencial          = lazy(() => import("./AngustiaExistencial.jsx"));
const AnsiedadVidaModerna          = lazy(() => import("./AnsiedadVidaModerna.jsx"));
const PsicoanalisisPseudociencia   = lazy(() => import("./PsicoanalisisPseudociencia.jsx"));
const TerapiaCrisisEconomica       = lazy(() => import("./TerapiaCrisisEconomica.jsx"));
const PsicoanalisisOnline          = lazy(() => import("./PsicoanalisisOnline.jsx"));
const DiferenciaPsicologoPsicoanalista = lazy(() => import("./DiferenciaPsicologoPsicoanalista.jsx"));
const ValeLaPenaPagarTerapia       = lazy(() => import("./ValeLaPenaPagarTerapia.jsx"));
const Burnout                      = lazy(() => import("./Burnout.jsx"));
const Insomnio                     = lazy(() => import("./Insomnio.jsx"));
const IAPsicoanalisis              = lazy(() => import("./IAPsicoanalisis.jsx"));
const PruebasDeFelicidad           = lazy(() => import("./PruebasDeFelicidad.jsx"));
const ExitoDeseoDelOtro            = lazy(() => import("./ExitoDeseoDelOtro.jsx"));

export const posts = [
  {
    slug: "exito-deseo-del-otro-vacio-ansiedad",
    title: "El éxito como respuesta al deseo del Otro",
    description:
      "Llegás a donde el Otro quería que llegaras y te encontrás vacío, o más ansioso que antes. El síntoma no desaparece con el logro: a veces se intensifica.",
    date: "2026-06-30",
    tags: [
      "Éxito",
      "Deseo del Otro",
      "Lacan",
      "Ansiedad",
      "Vacío",
      "Psicoanálisis",
    ],
    readMinutes: 8,
    Component: ExitoDeseoDelOtro,
  },
  {
    slug: "pruebas-de-felicidad-posmodernidad-vacio",
    title: "Un tiempo en el que se piden pruebas de felicidad todo el tiempo",
    description:
      "Sobre las trampas de la posmodernidad, el mandato de mostrarse feliz y la dificultad de dejar un vacío cuando se teme no existir si no se habla.",
    date: "2026-06-16",
    tags: [
      "Posmodernidad",
      "Felicidad",
      "Vacío",
      "Redes sociales",
      "Psicoanálisis",
    ],
    readMinutes: 8,
    hero: "/media/oscura-verdad-budismo-zen.webp",
    Component: PruebasDeFelicidad,
  },
  {
    slug: "chatgpt-no-te-va-a-analizar",
    title: "ChatGPT no te va a analizar",
    description:
      "Hay algo atractivo en hablarle a una máquina que nunca te juzga. Pero la IA valida siempre, no tiene inconsciente, no puede sorprenderse. Y eso es exactamente el problema.",
    date: "2026-05-17",
    tags: [
      "Inteligencia artificial y psicoanálisis",
      "IA terapia",
      "ChatGPT psicólogo",
      "Transferencia",
      "Psicoanálisis",
    ],
    readMinutes: 7,
    hero: "/media/chatgpt-no-te-va-a-analizar.webp",
    Component: IAPsicoanalisis,
  },
  {
    slug: "burnout-por-que-no-alcanza-con-descansar",
    title: "Burnout: por qué no alcanza con descansar",
    description:
      "El burnout no es una batería que se agotó. Algo te mantuvo corriendo. Y si no entendés qué, el descanso dura hasta que volvés a lo mismo.",
    date: "2026-05-17",
    tags: [
      "Burnout",
      "Agotamiento laboral",
      "Estrés laboral",
      "Psicoanálisis",
      "Salud mental trabajo",
    ],
    readMinutes: 7,
    hero: "/media/burnout-por-que-no-alcanza-con-descansar.webp",
    Component: Burnout,
  },
  {
    slug: "insomnio-las-3-de-la-manana",
    title: "Las 3 de la mañana saben algo que vos no querés saber",
    description:
      "El insomnio no siempre es un problema de sueño. Muchas veces es lo que aparece cuando caen todas las distracciones del día y algo que no encontró lugar finalmente puede hablar.",
    date: "2026-05-17",
    tags: [
      "Insomnio",
      "No puedo dormir",
      "Insomnio psicológico",
      "Ansiedad nocturna",
      "Psicoanálisis",
    ],
    readMinutes: 6,
    hero: "/media/insomnio-las-3-de-la-manana.webp",
    Component: Insomnio,
  },
  {
    slug: "vale-la-pena-pagar-terapia",
    title: "¿Vale la pena pagar por terapia?",
    description:
      "El costo de la terapia es visible. El costo de no hacerlo es más difuso, pero igual de real. Una mirada honesta sobre el valor del análisis y por qué el 'todavía no es el momento' suele ser parte del problema.",
    date: "2026-05-17",
    tags: [
      "Honorarios",
      "Psicoanálisis",
      "Salud mental",
      "Vale la pena la terapia",
      "Costo psicólogo",
    ],
    readMinutes: 7,
    hero: "/media/vale-la-pena-pagar-terapia.webp",
    Component: ValeLaPenaPagarTerapia,
  },
  {
    slug: "diferencia-psicologo-psicoanalista-coach",
    title: "Psicólogo, psicoanalista, coach: no ofrecen lo mismo",
    description:
      "No se trata de elegir una etiqueta profesional. Se trata de saber qué tipo de escucha buscás: rendimiento, alivio rápido o una lectura de eso que se repite.",
    date: "2026-05-17",
    tags: [
      "Diferencia psicólogo psicoanalista",
      "Coach vs psicólogo",
      "Psicoanálisis vs TCC",
      "Qué es un psicoanalista",
      "Encuadre clínico",
    ],
    readMinutes: 8,
    hero: "/media/diferencia-psicologo-psicoanalista-coach.webp",
    Component: DiferenciaPsicologoPsicoanalista,
  },
  {
    slug: "psicoanalisis-online-funciona",
    title: "¿Funciona el psicoanálisis online?",
    description:
      "La transferencia no depende de estar en el mismo cuarto. Qué cambia y qué no cuando el análisis se hace por videollamada, desde adentro de la práctica.",
    date: "2026-05-17",
    tags: [
      "Psicoanálisis online",
      "Terapia online",
      "Análisis online Argentina",
      "Transferencia",
    ],
    readMinutes: 6,
    hero: "/media/psicoanalisis-online-funciona.webp",
    Component: PsicoanalisisOnline,
  },
  {
    slug: "terapia-en-crisis-economica",
    title:
      "Terapia en crisis económica: cuando hablar de plata también es clínica",
    description:
      "La crisis material no se resuelve hablando. Pero el modo en que la culpa, la vergüenza y el miedo toman el cuerpo también necesita un lugar.",
    date: "2026-03-06",
    tags: [
      "Terapia en crisis económica",
      "Ansiedad económica",
      "Psicoanálisis",
      "Salud mental",
      "Honorarios",
    ],
    readMinutes: 8,
    hero: "/media/terapia-en-crisis-economica.webp",
    Component: TerapiaCrisisEconomica,
  },
  {
    slug: "psicoanalisis-es-pseudociencia-lacan",
    title:
      "¿El psicoanálisis es una pseudociencia? La respuesta incómoda que casi nadie explica bien",
    description:
      "La acusación de pseudociencia suele decir más del ideal de ciencia que del psicoanálisis. Un texto para separar clínica, laboratorio y deseo.",
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
    title: "Ansiedad moderna: vivir como si siempre debieras responder",
    description:
      "No es solo que haya más pantallas o más trabajo. Es una época que te exige estar disponible, rendir, gozar y no fallar.",
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
    title: "Angustia existencial: cuando nada alcanza para justificar la vida",
    description:
      "A veces no falta un plan. Falta que algo tenga peso. La angustia existencial aparece cuando la vida funciona, pero no responde.",
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
    title: "Autosabotaje: cuando fracasar también cumple una función",
    description:
      "No siempre repetimos lo que nos conviene. A veces repetimos lo que conserva una escena conocida, incluso cuando nos lastima.",
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
      "El desapego puede liberar. También puede volverse una forma elegante de no tocar nada de lo que produce sufrimiento.",
    date: "2025-09-07",
    tags: ["Budismo zen", "Psicoanálisis", "Crítica cultural", "Žižek", "Japón"],
    readMinutes: 7,
    hero: "/media/oscura-verdad-budismo-zen.webp",
    Component: ZenOscura,
  },
  {
    slug: "ikigai-formula-secreta-japonesa-felicidad",
    title: "Ikigai: cuando el sentido se vende como fórmula",
    description:
      "La época ama las fórmulas de sentido. El deseo, por suerte o por desgracia, no entra tan fácil en un diagrama.",
    date: "2025-09-07",
    tags: ["Japón", "Ikigai", "Psicoanálisis", "Cultura"],
    readMinutes: 6,
    hero: "/media/ikigai-formula-secreta-japonesa-felicidad.webp",
    Component: Ikigai,
  },
  {
    slug: "nostalgia-puente-japon-psicoanalisis",
    title: "La nostalgia: no extrañás solo lo que perdiste",
    description:
      "La nostalgia no siempre habla del pasado. A veces señala una falta actual, algo que todavía no encontró forma.",
    date: "2025-09-05",
    tags: ["Psicoanálisis", "Japón", "Nostalgia", "mono no aware"],
    readMinutes: 6,
    hero: "/media/nostalgia-puente-japon-psicoanalisis.webp",
    Component: Nostalgia,
  },
];

import React from "react";

export default function IAPsicoanalisis() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puede la inteligencia artificial reemplazar al psicólogo?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. La IA puede procesar texto, validar y dar respuestas empáticas, pero no tiene inconsciente, no desea, no puede sorprenderse. El trabajo analítico requiere un sujeto real del otro lado, con sus propios puntos ciegos, porque esa asimetría es parte de lo que produce el movimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es útil hablar con ChatGPT sobre mis problemas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Puede ayudar a ordenar pensamientos o a sentirse menos solo en un momento de angustia. Pero la IA siempre va a validar, nunca va a sorprenderse ni a señalar algo que vos no querías ver. Eso limita mucho lo que puede hacer.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tiene el psicoanálisis que la IA no puede replicar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "La transferencia: la relación específica con un otro que no sabe todo, que puede equivocarse, que tiene deseo propio. Esa fricción con un sujeto real es lo que hace posible el trabajo analítico. Una máquina que tiene respuesta para todo no puede producir ese efecto.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>ChatGPT no te va a analizar</h1>

      <p className="lead">
        Hay algo genuinamente atractivo en hablarle a una máquina que nunca se
        va a cansar de escucharte, nunca va a tener un mal día, y nunca te va a
        juzgar. Lo entiendo. Y creo que vale la pena pensar qué dice eso de
        nosotros, y qué dice de lo que esperamos cuando pedimos ayuda.
      </p>

      <p>
        Desde que los modelos de lenguaje se volvieron accesibles, hay personas
        que los usan como espacio de descarga emocional. Le cuentan a ChatGPT
        lo que no pueden contarle a nadie. Le preguntan qué hacer con una
        relación, qué hacer con la angustia, si lo que sienten es normal. Y la
        máquina responde con algo que suena empático, ponderado, sin juicio.
      </p>

      <p>
        Algunos dicen que les ayuda más que la terapia.
      </p>

      <p>
        Antes de descartarlo, quiero tomarlo en serio. Porque si alguien
        prefiere hablarle a una IA que a un analista, algo está diciendo sobre
        qué espera de ese espacio —y qué no encontró.
      </p>

      <h2>Lo que la máquina hace bien</h2>

      <p>
        La IA escucha sin agenda. No tiene ganas de terminar la sesión, no está
        pensando en su próximo paciente, no se aburre, no se incomoda. Está
        disponible a las 4 de la mañana. No te cobra.
      </p>

      <p>
        Para ciertos usos tiene sentido: ordenar un pensamiento caótico,
        escribir lo que sentís cuando no encontrás a quién contárselo, salir de
        un momento de angustia aguda con algo que suene razonable. Como primer
        movimiento, como alivio inmediato, puede funcionar.
      </p>

      <p>
        Lo que no puede hacer es lo que importa.
      </p>

      <h2>El problema de hablarle a algo que siempre tiene razón</h2>

      <p>
        La IA valida. Siempre. No porque sea buena —no tiene intenciones— sino
        porque está entrenada para producir respuestas que el usuario reciba
        bien. Es, estructuralmente, una máquina de hacer sentir escuchado.
      </p>

      <p>
        Y eso suena bien hasta que uno se da cuenta de lo que implica: nunca te
        va a decir algo que no querías escuchar. Nunca va a sorprenderse con lo
        que contás. Nunca va a señalar algo que vos no habías visto porque desde
        afuera se ve. No puede, porque no tiene afuera. Solo tiene el texto que
        le mandaste y los patrones con los que fue entrenada.
      </p>

      <p>
        En análisis, el momento más productivo muchas veces no es cuando el
        analista confirma lo que el paciente dice. Es cuando algo no encaja.
        Cuando la respuesta no llega o llega torcida. Cuando hay un silencio
        donde el paciente esperaba acuerdo. Esa fricción mueve algo. La
        validación permanente no mueve nada.
      </p>

      <h2>Lo que requiere un sujeto del otro lado</h2>

      <p>
        El psicoanálisis trabaja con la transferencia: esa disposición a
        dirigirle a otro algo que tiene que ver con la propia historia, con lo
        que se espera, con lo que se teme. La transferencia no requiere
        necesariamente que el analista haga mucho. Requiere que sea un sujeto
        real, con su propio inconsciente, sus propios puntos ciegos, su propio
        deseo.
      </p>

      <p>
        Una máquina no desea. No tiene inconsciente. No puede ser sorprendida
        por lo que le decís porque no tiene nada que defender, nada en juego,
        nada que lo que contás pueda tocar. Y esa ausencia de algo en juego es
        exactamente el problema.
      </p>

      <p>
        El análisis funciona, en parte, porque hay un otro que no sabe todo.
        Que puede equivocarse. Que tiene sus propias opacidades y las trabaja.
        Hablarle a algo que tiene respuesta para todo no produce transferencia.
        Produce la ilusión de ser comprendido, que no es lo mismo.
      </p>

      <h2>Por qué el atractivo de la IA dice algo clínico</h2>

      <p>
        Que alguien prefiera la IA a un analista no es solo una cuestión de
        comodidad o acceso. A veces dice algo sobre el vínculo que esa persona
        espera: sin riesgo, sin que el otro tenga peso propio, sin que lo que
        uno diga pueda tener consecuencias en esa relación.
      </p>

      <p>
        Eso es comprensible. Los vínculos reales tienen costo. Un analista
        puede decepcionarte, puede no entender algo, puede tener un mal día. Una
        máquina no. Y para alguien que viene de vínculos donde el otro siempre
        fallaba, esa garantía de que nada va a fallar puede parecer un alivio.
      </p>

      <p>
        Pero el trabajo analítico requiere exactamente lo contrario: un otro con
        peso propio, con quien algo real pueda pasar. Porque es en ese espacio,
        con ese riesgo, donde se mueve lo que necesita moverse.
      </p>

      <p>
        La IA puede ser un lugar donde desahogarse. No puede ser un lugar donde
        analizarse.
      </p>
    </article>
  );
}

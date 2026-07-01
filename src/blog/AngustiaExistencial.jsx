import React from "react";

export default function AngustiaExistencial() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la angustia existencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Es una forma de angustia que aparece cuando la vida funciona, pero algo del sentido cae. No siempre hay un problema concreto: a veces lo que cae es la justificación misma de lo que se viene sosteniendo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué aparece aunque todo esté bien?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Porque tener trabajo, pareja, proyectos o estabilidad no garantiza deseo. Puede haber funcionamiento sin orientación subjetiva.",
        },
      },
      {
        "@type": "Question",
        name: "¿El psicoanálisis trabaja la falta de sentido?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí, no ofreciendo un sentido prefabricado, sino escuchando qué perdió peso, qué deseo quedó tapado y qué lugar ocupa esa angustia en la historia del sujeto.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Angustia existencial: cuando nada alcanza para justificar la vida</h1>

      <p className="lead">
        Hay una angustia que no empieza con una catástrofe. No llega porque
        todo se derrumbó. A veces aparece al revés: cuando las cosas funcionan,
        cuando el sujeto cumplió, cuando tiene motivos razonables para estar
        bien y, sin embargo, algo no responde.
      </p>

      <p>
        Es una angustia difícil de explicar porque no siempre tiene objeto. No
        se deja reducir a “me pasó esto”. Es más incómoda: la vida sigue, pero
        perdió espesor. Lo que antes empujaba ahora parece mecánico. Lo que
        antes prometía sentido ahora parece una escena repetida.
      </p>

      <h2>Cuando la vida funciona, pero no llama</h2>

      <p>
        Mucha gente consulta diciendo algo parecido: “no tengo derecho a estar
        mal”. Trabajo hay. Vínculos hay. Proyectos hay. Incluso logros. Pero la
        pregunta insiste: ¿esto era todo?
      </p>

      <p>
        Esa pregunta no es ingratitud. Tampoco es capricho. A veces es el
        retorno de algo que quedó demasiado tiempo acomodado a lo que había que
        hacer. El sujeto fue cumpliendo, respondiendo, sosteniendo. Y un día
        descubre que la vida que armó no necesariamente lo incluye.
      </p>

      <p>
        No porque sea una vida falsa. Sino porque fue armada con demasiadas
        respuestas y pocas preguntas.
      </p>

      <h2>El sentido no se instala por decreto</h2>

      <p>
        La autoayuda suele tratar el sentido como si fuera una decisión: elegí
        tu propósito, ordená tus valores, diseñá una vida con intención. Hay
        algo seductor en eso. También hay algo violento. Como si bastara con
        nombrar un objetivo para que el deseo aparezca.
      </p>

      <p>
        El sentido no funciona así. No se fabrica de una vez. No se compra. No
        siempre aparece donde uno cree que debería aparecer. Y cuando se fuerza,
        suele tener olor a mandato.
      </p>

      <p>
        Por eso la angustia existencial no se resuelve con una frase intensa.
        Si alguien se pregunta por qué vive como vive, tal vez no necesita una
        respuesta rápida. Tal vez necesita que esa pregunta tenga, por primera
        vez, un lugar.
      </p>

      <h2>Frankl, Hegel, Lacan: tres advertencias</h2>

      <p>
        Frankl tenía razón en algo importante: el ser humano puede soportar
        mucho cuando algo tiene sentido. Pero de ahí no se sigue que el sentido
        sea una consigna motivacional. El sentido no es decoración del
        sufrimiento. Si aparece, aparece encarnado en una posición, en una
        apuesta, en un lazo.
      </p>

      <p>
        Hegel permite agregar otra cosa: nadie se sostiene solo en su interior.
        El reconocimiento importa. No porque uno viva para la mirada del otro,
        sino porque el deseo se arma en relación con otros. Una vida sin lazo,
        sin inscripción, sin respuesta de algún Otro, se vuelve difícil de
        habitar.
      </p>

      <p>
        Lacan incomoda un poco más: no hay objeto que cierre la falta. Y si no
        hay objeto que la cierre, la pregunta por el sentido no puede quedar
        reducida a encontrar “eso” que por fin calme todo. A veces la angustia
        aparece justamente cuando cae esa ilusión.
      </p>

      <h2>La crisis después de haber cumplido</h2>

      <p>
        Hay angustias que llegan tarde. No en la adolescencia, no cuando todo
        está por hacerse, sino después. Después de recibirse. Después de formar
        pareja. Después de ganar estabilidad. Después de lograr lo que parecía
        importante.
      </p>

      <p>
        Esa llegada tardía tiene lógica. Mientras uno corre, la pregunta queda
        suspendida. Hay una meta que organiza. Hay un después imaginado. Pero
        cuando se llega, el después deja de funcionar como promesa y se vuelve
        presente. Ahí puede aparecer el vacío.
      </p>

      <p>
        No siempre porque el logro no valga. A veces vale. Pero no alcanza para
        responder por el deseo.
      </p>

      <h2>No se trata de encontrar una misión</h2>

      <p>
        La palabra “misión” puede ser otra trampa. Suena noble, pero muchas
        veces vuelve a encerrar al sujeto en una obligación nueva: ahora tenés
        que vivir con propósito, aprovechar cada día, hacer algo significativo,
        justificar tu existencia con productividad espiritual.
      </p>

      <p>
        Tal vez el primer movimiento sea menos espectacular. No encontrar una
        misión, sino escuchar qué perdió valor. Qué dejó de llamar. Qué parte de
        la vida se volvió obediencia. Qué deseo quedó aplazado por ser
        inconveniente, raro, poco rentable o difícil de explicar.
      </p>

      <p>
        La angustia existencial no siempre pide una gran respuesta. A veces pide
        dejar de contestar con respuestas que ya no son propias.
      </p>

      <h2>Un análisis no entrega sentido</h2>

      <p>
        Un análisis no viene a decirte para qué vivir. Sería obsceno. Lo que
        puede hacer es abrir un lugar para que esa pregunta no quede capturada
        por el mandato, la culpa o la comparación.
      </p>

      <p>
        Hay preguntas que no se resuelven pensando más fuerte. Se trabajan. Se
        rodean. Se dicen de distintas maneras hasta que algo del sujeto empieza
        a ubicarse de otro modo.
      </p>

      <p>
        Quizás el sentido no sea una respuesta final. Quizás sea el efecto de
        dejar de vivir enteramente en una vida armada para responderle a otros.
      </p>
    </article>
  );
}

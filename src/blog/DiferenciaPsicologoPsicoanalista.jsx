import React from "react";

export default function DiferenciaPsicologoPsicoanalista() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre un psicólogo y un psicoanalista?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Un psicólogo aplica técnicas y protocolos orientados a modificar conductas o pensamientos. Un psicoanalista trabaja con el inconsciente, el síntoma y la historia singular del sujeto. No son mejores ni peores: apuntan a cosas distintas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hace un coach y en qué se diferencia de un psicoanalista?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El coach trabaja orientado al futuro y al rendimiento, asumiendo que el consultante tiene los recursos y solo necesita organizarlos. El psicoanalista trabaja con lo que repite, con lo que traba, con lo que la persona no puede cambiar aunque quiera.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo conviene un psicólogo cognitivo y cuándo un psicoanalista?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Si el objetivo es reducir un síntoma específico en el corto plazo con protocolos estructurados, la TCC puede ser adecuada. Si el malestar es más difuso, más antiguo, o si se repite sin que los intentos de cambio funcionen, el psicoanálisis suele tener más que ofrecer.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Psicólogo, psicoanalista, coach: qué hace cada uno y cómo elegir</h1>

      <p className="lead">
        La confusión es comprensible. Los tres trabajan con personas, los tres
        cobran por hora, y los tres dicen que pueden ayudarte. Pero hacen cosas
        muy distintas. Saber la diferencia no es un detalle menor: define qué
        tipo de trabajo vas a hacer y qué podés esperar.
      </p>

      <p>
        Voy a hablar de esto desde adentro, sin pretender neutralidad. Soy
        psicoanalista y creo en lo que hago. Pero también creo que cada
        encuadre tiene su lógica, y que derivar a alguien a un colega cuando el
        trabajo lo requiere es parte de la ética clínica, no una derrota.
      </p>

      <h2>El coach</h2>

      <p>
        El coaching parte de una suposición: que el consultante tiene lo que
        necesita para llegar donde quiere ir, y que solo le falta organizarlo,
        enfocarlo, activarlo. El coach es, en ese sentido, un facilitador de
        recursos.
      </p>

      <p>
        Eso funciona bien en contextos acotados: un profesional que quiere
        mejorar su rendimiento, alguien que está cambiando de carrera y necesita
        claridad sobre sus próximos pasos. Escenarios donde el problema es
        real pero manejable, y donde la persona efectivamente tiene los
        recursos que necesita.
      </p>

      <p>
        El problema es cuando el coaching se aplica donde no corresponde.
        Cuando alguien llega con una angustia que se repite hace diez años, con
        vínculos que siempre terminan igual, con una sensación de fondo que no
        cede, y se le da un plan de acción. Los planes de acción no tocan eso.
        No porque sean malos, sino porque apuntan a otro nivel.
      </p>

      <h2>El psicólogo cognitivo-conductual</h2>

      <p>
        La terapia cognitivo-conductual (TCC) tiene algo que el psicoanálisis
        debería reconocer: protocolos claros, resultados medibles, y eficacia
        documentada para ciertos cuadros. Los tratamientos para fobias
        específicas, para el trastorno de pánico, para el TOC —en estos casos
        la TCC tiene evidencia sólida.
      </p>

      <p>
        El supuesto de fondo es que el malestar viene de pensamientos y
        conductas que pueden identificarse y modificarse. Detectás el
        pensamiento disfuncional, lo cuestionás, lo reemplazás por uno más
        adaptativo. Es un trabajo activo, estructurado, con tareas entre
        sesiones.
      </p>

      <p>
        ¿Cuándo tiene sentido? Cuando el objetivo es específico y acotado: dejar
        de tener ataques de pánico, poder subir a un avión, dormir mejor. Cuando
        el malestar es reciente y no está demasiado enraizado en la historia
        personal. Cuando la persona quiere técnicas concretas y un horizonte de
        tiempo definido.
      </p>

      <h2>El psicoanalista</h2>

      <p>
        El psicoanálisis parte de otro supuesto: que el malestar no es un error
        de software que hay que corregir. Es un síntoma. Y el síntoma dice algo,
        aunque la persona no sepa qué.
      </p>

      <p>
        El trabajo no es eliminar el síntoma lo antes posible sino escucharlo.
        Ver qué historia carga, qué función cumple, por qué apareció ahí y no
        en otro lugar. Eso no quiere decir que el objetivo no sea que te sientas
        mejor —lo es. Pero el camino para llegar ahí pasa por entender, no solo
        por modificar.
      </p>

      <p>
        El psicoanálisis tiene sentido cuando el malestar es más difuso, más
        antiguo, más resistente al cambio voluntario. Cuando alguien ya intentó
        varias cosas y el problema vuelve. Cuando lo que duele no tiene un
        nombre claro pero está ahí. Cuando los vínculos se repiten de maneras
        que uno no elige. Cuando algo del pasado sigue operando en el presente
        aunque racionalmente "ya esté superado".
      </p>

      <h2>Cómo elegir</h2>

      <p>
        La pregunta no es cuál es mejor en abstracto. La pregunta es: ¿qué
        estás buscando?
      </p>

      <p>
        Si querés herramientas para manejar algo específico en el corto plazo,
        un psicólogo cognitivo probablemente sea lo más adecuado. Si querés
        mejorar tu rendimiento y tenés un objetivo concreto, el coaching puede
        funcionar. Si lo que sentís es más profundo, más antiguo, o más difícil
        de nombrar, el psicoanálisis tiene más para ofrecer.
      </p>

      <p>
        No son excluyentes en términos de tiempo —hay gente que hace TCC para
        un síntoma agudo y análisis para el trabajo de fondo—, pero sí apuntan
        a niveles distintos. Entender eso antes de empezar ahorra confusión
        después.
      </p>

      <p>
        Y si todavía no sabés bien qué estás buscando, eso también es una buena
        razón para hablar.
      </p>
    </article>
  );
}

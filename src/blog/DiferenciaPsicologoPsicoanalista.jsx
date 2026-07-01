import React from "react";

export default function DiferenciaPsicologoPsicoanalista() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre psicólogo, psicoanalista y coach?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No ofrecen lo mismo. El coaching suele orientarse a objetivos y rendimiento; algunas terapias trabajan con técnicas de alivio o modificación de conductas; el psicoanálisis escucha el síntoma, la repetición y el deseo singular.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo tiene sentido consultar con un psicoanalista?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cuando algo se repite, cuando entender no alcanza, cuando el malestar no se deja reducir a un objetivo práctico o cuando hay una pregunta por el deseo.",
        },
      },
      {
        "@type": "Question",
        name: "¿El psicoanálisis es mejor que otros enfoques?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No se trata de superioridad abstracta. Cada encuadre responde a demandas distintas. Lo importante es no pedirle a un dispositivo algo para lo que no fue pensado.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Psicólogo, psicoanalista, coach: no ofrecen lo mismo</h1>

      <p className="lead">
        La pregunta suele formularse mal: “¿qué me conviene?”. Como si se
        tratara de elegir entre marcas parecidas. Pero no es lo mismo pedir
        rendimiento, alivio, orientación, diagnóstico o una lectura de lo que se
        repite. Cada demanda inventa un dispositivo.
      </p>

      <p>
        Por eso no alcanza con comparar títulos. Hay que preguntar qué espera
        alguien cuando consulta. Quiere ordenar objetivos. Quiere dejar de
        sufrir rápido. Quiere entender por qué vuelve siempre al mismo lugar.
        Quiere que alguien le diga qué hacer. Quiere, aunque no lo sepa, que
        alguien escuche lo que no entra en ningún plan.
      </p>

      <h2>El coaching: cuando la demanda es rendimiento</h2>

      <p>
        El coaching suele trabajar con objetivos. Parte de una hipótesis: la
        persona tiene recursos, pero necesita enfocarlos, organizarlos,
        convertirlos en acción. Puede ser útil cuando la demanda está bien
        delimitada: una decisión profesional, un cambio de carrera, una meta
        concreta, una dificultad de ejecución.
      </p>

      <p>
        El problema aparece cuando se le pide al coaching que trabaje un
        síntoma. Un síntoma no es una meta mal formulada. No se resuelve siempre
        con foco, accountability o plan de acción. A veces lo que traba a una
        persona no es falta de herramientas, sino una repetición que la excede.
      </p>

      <p>
        Ahí el lenguaje del rendimiento puede volverse cruel. Porque si todo es
        objetivo, quien no avanza queda rápidamente del lado de la falla.
      </p>

      <h2>La terapia orientada a técnicas: cuando la demanda es alivio</h2>

      <p>
        Hay terapias que trabajan con protocolos, ejercicios, registros,
        modificación de conductas, exposición, regulación. Para algunas
        demandas, eso puede tener sentido. No hace falta caricaturizarlo. Si
        alguien necesita bajar una activación puntual o intervenir sobre una
        conducta concreta, puede encontrar ahí un encuadre adecuado.
      </p>

      <p>
        Pero no todo malestar es un problema técnico. Hay sufrimientos que no
        se dejan traducir a una conducta a corregir. Hay síntomas que vuelven
        aunque la persona sepa qué debería hacer. Hay angustias que no se
        explican por una distorsión cognitiva, sino por una posición subjetiva,
        un lazo, una deuda, una escena.
      </p>

      <p>
        Cuando el malestar insiste, la pregunta cambia. No es solo cómo
        disminuirlo, sino qué lugar ocupa.
      </p>

      <h2>El psicoanálisis: cuando entender no alcanza</h2>

      <p>
        El psicoanálisis no empieza prometiendo una solución rápida. Empieza por
        escuchar. No porque escuchar sea poco, sino porque en lo que alguien
        dice aparece más de lo que cree estar diciendo: repeticiones, cortes,
        lapsus, contradicciones, silencios, modos de ubicarse frente al deseo
        del Otro.
      </p>

      <p>
        Al psicoanálisis suele llegar alguien que ya entendió muchas cosas. Sabe
        que se autosabotea. Sabe que el vínculo no le hace bien. Sabe que se
        exige demasiado. Sabe que repite. Y sin embargo, saberlo no alcanza.
      </p>

      <p>
        Ese “no alcanza” es el punto de entrada. Porque el síntoma no es falta
        de información. Tiene una función. Algo sostiene, evita, paga, repite,
        goza.
      </p>

      <h2>Elegir no es consumir una técnica</h2>

      <p>
        Elegir un encuadre no debería parecerse a elegir una app. No es “qué
        método funciona más rápido” en abstracto. Es qué tipo de pregunta estás
        dispuesto a hacer.
      </p>

      <p>
        Si querés mejorar un rendimiento concreto, quizá tenga sentido un
        espacio orientado a objetivos. Si necesitás intervenir sobre un síntoma
        puntual y acotado, puede servir un enfoque técnico. Si lo que aparece es
        una repetición que no entendés del todo, una angustia que no se deja
        domesticar o una pregunta por tu deseo, el psicoanálisis ofrece otra
        cosa.
      </p>

      <p>
        No necesariamente más cómoda. Pero sí más honesta con aquello que no se
        resuelve obedeciendo mejor.
      </p>
    </article>
  );
}

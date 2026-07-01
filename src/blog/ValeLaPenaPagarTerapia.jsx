import React from "react";

export default function ValeLaPenaPagarTerapia() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Vale la pena pagar por psicoanálisis?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Depende de qué tan costoso sea no hacerlo. El malestar sin atender tiene costos concretos: decisiones tomadas desde la angustia, vínculos dañados, años de productividad perdida. Comparado con eso, el costo de un análisis suele ser menor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué la terapia es cara?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Un analista ofrece un espacio que no existe en ningún otro contexto: escucha sin agenda propia, confidencialidad y un trabajo orientado por lo que aparece en la palabra de quien consulta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta el psicoanálisis en Argentina?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Los honorarios varían según el profesional y la zona. En el sector privado, una sesión en Buenos Aires puede rondar los $40.000 a $70.000 ARS. El valor exacto se confirma en la primera entrevista.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>¿Vale la pena pagar por análisis?</h1>

      <p className="lead">
        La pregunta es razonable. El análisis no es barato, y en Argentina menos.
        Antes de responderla, vale la pena girarla: ¿cuánto cuesta no hacerlo?
      </p>

      <p>
        No lo digo para provocar. Lo digo porque es la manera más honesta de
        entrar al tema. El costo del análisis es visible, concreto, aparece en
        el resumen de la tarjeta. El costo del malestar sin atender es más
        difuso, se distribuye en el tiempo, y casi nunca se contabiliza.
      </p>

      <h2>Lo que cuesta no atenderse</h2>

      <p>
        Hay costos directos: la productividad que se pierde cuando la angustia
        no deja concentrarse, los vínculos que se dañan cuando algo no
        elaborado gobierna las reacciones, las decisiones que se toman desde el
        pánico en lugar de desde la claridad. Eso tiene precio, aunque no
        figure en ninguna factura.
      </p>

      <p>
        Y hay costos más difíciles de medir: los años que pasan mientras algo
        se repite sin moverse. La relación que termina igual que la anterior. El
        trabajo que se abandona justo cuando iba bien. El cuerpo que empieza a
        hablar lo que la mente no procesa.
      </p>

      <p>
        No estoy diciendo que el análisis lo resuelve todo. Estoy diciendo que
        cuando alguien llega al consultorio después de cinco años de "lo estoy
        manejando solo", el relato casi siempre incluye una cuenta de lo que
        esos cinco años costaron. En vínculos, en trabajo, en salud.
      </p>

      <h2>Por qué el precio no es arbitrario</h2>

      <p>
        Lacan decía algo que incomoda un poco: que el pago en el análisis no es
        un detalle administrativo. Es parte del encuadre. Que alguien ponga
        algo —tiempo, dinero, esfuerzo— en el espacio analítico es lo que le da
        un peso diferente a ese espacio. Lo distingue de una conversación con un
        amigo, de un consejo familiar, de un podcast de bienestar.
      </p>

      <p>
        No lo digo para justificar honorarios. Lo digo porque es clínicamente
        real: cuando algo cuesta, se toma en serio de una manera distinta.
        El análisis gratuito existe y tiene su valor, pero el lugar que ocupa en
        la vida de alguien es diferente cuando hay un compromiso concreto.
      </p>

      <p>
        Un profesional con formación específica ofrece algo que no existe en
        ningún otro contexto: escucha sin agenda propia, confidencialidad
        absoluta, y un trabajo orientado exclusivamente a quien consulta. Eso
        no lo da el mejor amigo —porque tiene su propia historia con vos. No lo
        da la familia —porque tiene demasiado en juego. No lo da ninguna app.
      </p>

      <h2>El problema de compararlo con otras cosas</h2>

      <p>
        La comparación que más escucho es con el gym, con Netflix, con salidas.
        "Por lo que pago en análisis podría hacer esto otro." Es una comparación
        válida en términos de presupuesto, pero no en términos de qué compra
        cada cosa.
      </p>

      <p>
        Lo que compra el análisis —si funciona— es un movimiento en algo que
        estaba trabado. Un cambio en cómo una persona se para frente a ciertos
        problemas, ciertos vínculos, ciertos patrones. Eso no tiene precio de
        referencia porque es difícil de comparar con cualquier otra cosa.
      </p>

      <p>
        Cuando alguien termina un análisis y mira hacia atrás, casi nunca el
        balance es "gasté demasiado". El balance más frecuente es "ojalá
        hubiera empezado antes".
      </p>

      <h2>Cuándo el dinero es un obstáculo real</h2>

      <p>
        Todo lo anterior no niega que haya situaciones donde el costo es
        genuinamente inaccesible. Eso existe y no tiene sentido romantizarlo.
      </p>

      <p>
        En esos casos hay opciones: residencias universitarias, servicios
        públicos, asociaciones con escala de honorarios. No son lo mismo que la
        atención privada, pero son atención.
      </p>

      <p>
        Lo que sí creo es que cuando alguien que puede pagarlo lo pospone
        indefinidamente porque "todavía no es el momento", casi siempre ese
        "todavía no" es parte del problema, no una evaluación financiera. El
        momento en que uno necesita atenderse rara vez es el más cómodo
        económicamente. Y esperar a que todo esté alineado suele ser otra forma
        de no empezar.
      </p>

      <p>
        Si estás en ese punto, la primera sesión no compromete a nada. Sirve
        para ver si tiene sentido seguir. Eso vale la pena averiguarlo.
      </p>
    </article>
  );
}

import React from "react";

export default function AnsiedadVidaModerna() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué hay tanta ansiedad hoy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Porque la época empuja a estar disponible, rendir, responder, mostrarse y gozar. La ansiedad aparece cuando el cuerpo queda tomado por una demanda que no se apaga.",
        },
      },
      {
        "@type": "Question",
        name: "¿La ansiedad es solo un problema individual?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Hay condiciones sociales, laborales y tecnológicas que producen ansiedad. Pero cada sujeto queda tomado por esa época de un modo singular.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué puede hacer el psicoanálisis con la ansiedad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No se trata solo de bajar síntomas, sino de leer qué demanda, qué miedo o qué deseo queda atrapado en ese estado de alerta.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Ansiedad moderna: vivir como si siempre debieras responder</h1>

      <p className="lead">
        La ansiedad contemporánea no siempre aparece como ataque de pánico. A
        veces aparece como una forma de estar: el cuerpo listo, la cabeza
        encendida, el teléfono cerca, la sensación de que algo se está escapando
        aunque no sepas exactamente qué.
      </p>

      <p>
        No es solo nerviosismo. Es una disponibilidad permanente. Responder,
        producir, mostrarse, decidir, rendir, estar al día, no quedar afuera,
        no perder la oportunidad, no decepcionar. La época no dice simplemente
        “trabajá”. Dice algo más cruel: trabajá, disfrutá, elegí bien, sé
        auténtico, sé visible, y además no te quejes demasiado.
      </p>

      <h2>La vida como notificación</h2>

      <p>
        Hay una forma de vivir que se parece a tener una notificación interna
        prendida todo el tiempo. Incluso cuando no suena nada, el cuerpo queda
        esperando. Algo puede pasar. Alguien puede escribir. Una tarea puede
        caer. Una comparación puede aparecer. Una noticia puede cambiar el
        clima del día.
      </p>

      <p>
        La ansiedad no nace únicamente del teléfono, pero el teléfono encontró
        una manera perfecta de alojarla. Promete conexión y produce vigilancia.
        Promete descanso y abre otra lista. Promete compañía y deja al sujeto
        más pendiente de la mirada del Otro.
      </p>

      <p>
        Uno cree que mira la pantalla. Muchas veces es la pantalla la que lo
        mira a uno: le recuerda quién no contestó, quién avanzó, quién viajó,
        quién logró, quién parece estar viviendo mejor.
      </p>

      <h2>El mandato de estar bien</h2>

      <p>
        Antes el superyó prohibía. Ahora también exige gozar. No alcanza con
        cumplir; hay que estar bien cumpliendo. No alcanza con trabajar; hay que
        amar lo que uno hace. No alcanza con descansar; el descanso también
        tiene que ser productivo, fotografiable, saludable.
      </p>

      <p>
        Ese mandato produce una ansiedad particular: la de estar fallando en la
        vida incluso cuando nada grave está pasando. Una falla difusa, sin
        objeto claro. El sujeto no sabe exactamente de qué se defiende, pero el
        cuerpo ya está defendido.
      </p>

      <p>
        Por eso a veces la pregunta “¿de qué estás ansioso?” no ayuda. Porque la
        ansiedad no siempre viene con un contenido claro. A veces es el modo en
        que el cuerpo responde a una demanda sin rostro.
      </p>

      <h2>No todo es química, no todo es contexto</h2>

      <p>
        Sería cómodo elegir una explicación única. Decir que la ansiedad es
        neuroquímica. O decir que es capitalismo. O decir que es trauma. O decir
        que es exceso de pantallas. Hay algo de verdad en varias de esas
        respuestas, pero ninguna alcanza por sí sola.
      </p>

      <p>
        La pregunta clínica es más precisa: cómo se anuda todo eso en una
        persona concreta. Qué demanda escucha. Qué mirada teme perder. Qué deuda
        cree tener. Qué deseo queda aplastado debajo de tanta adaptación.
      </p>

      <p>
        Dos personas viven en la misma época y no se angustian igual. La época
        empuja, sí. Pero el síntoma siempre tiene una gramática singular.
      </p>

      <h2>La ansiedad como defensa</h2>

      <p>
        A veces la ansiedad no es solo un problema: también es una defensa. Una
        manera de no detenerse. Si la cabeza sigue funcionando, si el cuerpo se
        mantiene en alerta, si siempre hay algo que resolver, entonces no hay
        que encontrarse con una pregunta más simple y más difícil: qué quiero.
      </p>

      <p>
        La ansiedad llena. Ocupa. Hace ruido. Y por eso, paradójicamente, puede
        evitar un vacío más angustiante. No porque la persona lo elija
        conscientemente, sino porque el aparato psíquico encuentra soluciones
        raras para no tocar ciertos puntos.
      </p>

      <p>
        En análisis, la pregunta no es solo cómo calmar la ansiedad. También es
        qué estaba sosteniendo. Qué impedía. Qué tapaba. A quién respondía.
      </p>

      <h2>Cuando el cuerpo habla antes que uno</h2>

      <p>
        Palpitaciones, tensión, insomnio, nudo en la garganta, opresión en el
        pecho. El cuerpo puede decir antes que el sujeto. No siempre dice algo
        claro, pero insiste. Y cuando insiste, conviene escucharlo.
      </p>

      <p>
        No para convertir cada sensación en drama, sino para no reducirla a un
        desperfecto. El cuerpo no es una máquina que se desreguló porque sí. A
        veces es el lugar donde aparece lo que no encontró palabra.
      </p>

      <p>
        Tal vez la ansiedad moderna sea eso: una época que habla demasiado
        fuerte en el cuerpo de cada uno. El análisis no apaga la época. Pero
        puede ayudar a distinguir qué parte de ese ruido es tuya, cuál heredaste
        y a qué demanda ya no querés seguir respondiendo.
      </p>
    </article>
  );
}

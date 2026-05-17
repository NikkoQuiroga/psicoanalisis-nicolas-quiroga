import React from "react";

export default function Insomnio() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El insomnio puede tener una causa psicológica?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Cuando el insomnio no tiene causa orgánica clara, suele estar ligado a algo que no se procesó: una decisión postergada, un vínculo en conflicto, algo que el día no deja pensar y la noche pone en primer plano.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pienso a las 3 de la mañana y por qué no puedo parar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El pensamiento nocturno es lo que queda cuando caen todas las distracciones del día. No es que la noche produzca esos pensamientos: los hace visibles. Algo que no encontró lugar durante el día lo encuentra ahí.",
        },
      },
      {
        "@type": "Question",
        name: "¿El psicoanálisis sirve para el insomnio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cuando el insomnio es de origen psíquico, trabajar analíticamente lo que lo produce —la angustia, el conflicto, lo no dicho— suele tener más impacto duradero que los recursos para manejar el sueño.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Las 3 de la mañana saben algo que vos no querés saber</h1>

      <p className="lead">
        Son las 3. Estás despierto. Y de golpe lo que no te animaste a pensar
        en todo el día está ahí, tomando toda la pantalla. Sin que lo hayas
        convocado. Sin que sepas bien cómo pararlo.
      </p>

      <p>
        El insomnio tiene mala prensa porque se lo trata como un problema de
        rendimiento. Dormís mal, rendís mal. Dormís bien, rendís bien. Y
        entonces el objetivo se vuelve técnico: cómo optimizar el sueño,
        cuántas horas, qué temperatura en el cuarto, qué luz azul evitar.
      </p>

      <p>
        Eso funciona a veces. Y cuando no funciona, es porque la pregunta
        estaba mal hecha.
      </p>

      <h2>El insomnio no es un problema de sueño</h2>

      <p>
        O no siempre. Hay insomnios orgánicos, hay causas médicas que hay que
        descartar, hay fármacos que interfieren con el descanso. Eso existe y
        no lo voy a minimizar.
      </p>

      <p>
        Pero hay otro insomnio, el más frecuente entre quienes consultan, que
        es en realidad un problema de pensamiento. Más exactamente: un problema
        con lo que aparece cuando el pensamiento no tiene dónde escapar.
      </p>

      <p>
        Durante el día hay movimiento, pantallas, tareas, conversaciones,
        desplazamientos. Todo eso funciona como ruido de fondo que mantiene
        ciertas cosas fuera del foco. La noche saca el ruido. Y lo que queda es
        lo que estaba esperando.
      </p>

      <p>
        Las 3 de la mañana no producen esos pensamientos. Los hace visibles.
      </p>

      <h2>Qué es lo que no encontró lugar durante el día</h2>

      <p>
        Varía según cada quien, pero hay patrones. La decisión que venís
        postergando hace meses y que de alguna manera "no es urgente" mientras
        estés ocupado. La conversación que tenés que tener con alguien y que
        encontrás mil razones para no tener. El trabajo que ya no te dice nada
        pero del que no sabés cómo salir. La relación que está en un punto
        muerto y que funciona mientras ninguno de los dos la nombra.
      </p>

      <p>
        El día los mantiene en suspenso. La noche los pone sobre la cama.
      </p>

      <p>
        No es que seas ansioso por naturaleza. Es que algo no encontró su lugar
        y elige el único momento en que no podés ignorarlo para aparecer.
      </p>

      <h2>Por qué la higiene del sueño no alcanza</h2>

      <p>
        Apagar las pantallas una hora antes, no tomar café después de las 6,
        mantener horarios regulares. Todo eso está bien y tiene sentido. Si tu
        insomnio viene de hábitos, los hábitos lo van a mejorar.
      </p>

      <p>
        Pero si lo que te desvela es una angustia concreta, ninguna rutina
        nocturna la va a mover. Porque la angustia no está en el teléfono ni en
        el café. Está en algo que todavía no dijiste, que todavía no decidiste,
        que todavía no procesaste.
      </p>

      <p>
        Hay personas que pasan años probando suplementos, técnicas de
        respiración, aplicaciones de meditación. Y siguen despiertos a las 3.
        No porque las técnicas sean inútiles, sino porque están tratando el
        síntoma sin preguntarse qué lo produce.
      </p>

      <h2>Lo que la noche tiene para decir</h2>

      <p>
        Freud tenía una hipótesis sobre los sueños que se puede extender al
        insomnio: que lo nocturno es el momento en que el inconsciente tiene
        más espacio. Que el aparato psíquico, menos ocupado en gestionar la
        realidad, procesa lo que quedó pendiente.
      </p>

      <p>
        Desde ahí, el insomnio no es un fracaso del sueño. Es una señal de que
        algo está esperando atención. La pregunta no es cómo hacer para dormir
        —aunque eso también importe— sino qué es lo que está ahí, en la oscuridad,
        esperando que lo mires.
      </p>

      <p>
        Esa pregunta tiene respuesta. Pero suele necesitar un espacio para
        hacerse, y un tiempo para responderse. Sola, a las 3 de la mañana,
        casi nunca sale bien.
      </p>
    </article>
  );
}

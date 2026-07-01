import React from "react";

export default function TerapiaCrisisEconomica() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Tiene sentido sostener terapia en una crisis económica?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Puede tener sentido si el espacio no se vive como una carga muda. La crisis material no se resuelve hablando, pero la angustia, la culpa y la vergüenza que produce sí necesitan elaboración.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede hablar de honorarios en análisis?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Hablar de dinero también forma parte del encuadre. No es un detalle administrativo cuando toca culpa, deuda, vergüenza o miedo a depender.",
        },
      },
      {
        "@type": "Question",
        name: "¿Abandonar de golpe puede afectar el proceso?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A veces sí. No porque haya que sostener todo a cualquier precio, sino porque una interrupción abrupta puede repetir una lógica de retirada, vergüenza o silencio.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Terapia en crisis económica: cuando hablar de plata también es clínica</h1>

      <p className="lead">
        En una crisis económica, la plata deja de ser un tema práctico y se
        vuelve clima. Entra en la casa, en el cuerpo, en las conversaciones, en
        el sueño. También entra en el consultorio. Sería absurdo fingir que no.
      </p>

      <p>
        La pregunta “¿puedo seguir pagando?” rara vez es solo una cuenta. A
        veces trae culpa. A veces vergüenza. A veces bronca. A veces miedo a
        depender, a pedir, a decir que no se puede, a sentir que uno fracasó por
        no poder sostener algo que antes sostenía.
      </p>

      <h2>La crisis material no se cura hablando</h2>

      <p>
        Hay que decirlo sin vueltas: el psicoanálisis no arregla salarios,
        alquileres, inflación ni deudas. No reemplaza una política pública, ni
        una red de apoyo, ni una decisión económica concreta. Cuando falta
        plata, falta plata.
      </p>

      <p>
        Pero la falta material no llega sola. Viene con fantasías, culpas,
        escenas familiares, mandatos de autosuficiencia, terror a caer,
        vergüenza de no poder, rabia por tener que elegir entre cosas que no
        deberían competir.
      </p>

      <p>
        Eso sí se trabaja. No para negar lo material, sino para que lo material
        no se vuelva, además, una condena íntima.
      </p>

      <h2>El dinero nunca es solo dinero</h2>

      <p>
        En análisis, hablar de honorarios puede tocar zonas muy sensibles. Para
        alguien, pagar puede ser una forma de sostener un lugar propio. Para
        otro, puede vivirse como culpa. Para otro, como deuda. Para otro, como
        una prueba de que merece o no merece cuidado.
      </p>

      <p>
        Por eso cuando alguien dice “no puedo seguir”, conviene escuchar
        también cómo lo dice. Si lo dice con vergüenza. Si lo dice tarde. Si lo
        dice como disculpa. Si desaparece antes de decirlo. Si arma una escena
        donde la única salida posible es cortar.
      </p>

      <p>
        No porque todo deba interpretarse. Sino porque incluso las decisiones
        necesarias pueden repetirse de una manera que deja al sujeto solo con su
        síntoma.
      </p>

      <h2>La culpa individual en una época rota</h2>

      <p>
        La época tiene una habilidad perversa: convierte problemas estructurales
        en fallas personales. Si no llegás, administraste mal. Si estás
        angustiado, no sos resiliente. Si no podés pagar, no priorizaste. Si te
        caés, no te esforzaste suficiente.
      </p>

      <p>
        Esa lectura es cruel porque borra el contexto. Pero también porque deja
        al sujeto encerrado en una culpa muda. La crisis deja de ser una
        situación y pasa a ser identidad: “soy un desastre”, “no sirvo”, “no
        puedo sostener nada”.
      </p>

      <p>
        Un análisis puede discutir esa traducción. No para quitar
        responsabilidad, sino para separar responsabilidad de castigo.
      </p>

      <h2>No sostener todo a cualquier precio</h2>

      <p>
        Decir que el espacio puede ser importante no significa que haya que
        sostenerlo siempre, de cualquier modo, aunque se vuelva inviable. Eso
        también sería violento. Hay momentos en que hace falta pausar, cambiar
        frecuencia, conversar posibilidades o buscar otro dispositivo.
      </p>

      <p>
        Lo clínicamente importante es que eso pueda decirse. Que no se convierta
        en desaparición. Que la vergüenza no decida sola. Que la interrupción,
        si ocurre, no sea otra escena de caída silenciosa.
      </p>

      <p>
        A veces hablar de plata es la primera vez que alguien puede hablar de
        deuda, miedo y necesidad sin tener que hacerse el fuerte.
      </p>

      <h2>La crisis también muestra cómo alguien se trata</h2>

      <p>
        Bajo presión aparece una verdad incómoda: el modo en que alguien se
        habla cuando no llega. Hay quienes se insultan. Hay quienes se exigen
        más. Hay quienes se comparan. Hay quienes se apagan. Hay quienes se
        endeudan para no decepcionar a nadie.
      </p>

      <p>
        La crisis económica no inventa todo eso, pero lo vuelve visible. Y lo
        visible puede trabajarse.
      </p>

      <p>
        No para romantizar la dificultad. Nadie necesita que le digan que la
        crisis es una oportunidad. A veces la crisis es simplemente una crisis.
        Pero incluso ahí, quizá sobre todo ahí, importa no quedar reducido a la
        cuenta que no cierra.
      </p>
    </article>
  );
}

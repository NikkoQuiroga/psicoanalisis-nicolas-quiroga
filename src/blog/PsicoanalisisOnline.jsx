import React from "react";

export default function PsicoanalisisOnline() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El psicoanálisis online funciona igual que el presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Funciona, aunque es distinto. La transferencia opera igual porque es una estructura de lenguaje, no requiere proximidad física. Lo que cambia es el marco: la pantalla introduce su propia distancia, que a veces abre cosas que el consultorio cierra.",
        },
      },
      {
        "@type": "Question",
        name: "¿La transferencia funciona por videollamada?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. La transferencia no depende de estar en el mismo cuarto. Depende de la relación con el saber supuesto, con la escucha, con lo que se espera del otro. Eso viaja perfectamente por Zoom.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay algo que el análisis online no puede hacer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El cuerpo está menos presente. Ciertos silencios pesan diferente. Pero en la práctica clínica cotidiana, esas diferencias rara vez cambian el trabajo de fondo.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>¿Funciona el psicoanálisis online?</h1>

      <p className="lead">
        La pregunta tiene trampa. Supone que el psicoanálisis "funciona" por
        algo que tiene que ver con estar en el mismo cuarto. Y eso vale la pena
        discutirlo.
      </p>

      <p>
        Cuando alguien me pregunta si el análisis online da resultado, casi
        siempre hay otra pregunta detrás: ¿es lo mismo? ¿Me voy a perder algo?
        ¿Es una versión recortada de algo que debería ser presencial?
      </p>

      <p>
        La respuesta honesta es: no es lo mismo. Pero tampoco es menos.
      </p>

      <h2>Qué necesita el análisis para funcionar</h2>

      <p>
        El psicoanálisis trabaja con el lenguaje. Con lo que se dice, con lo que
        no se puede decir, con lo que aparece sin que uno lo haya planeado. Un
        lapsus no requiere que el analista esté sentado a dos metros. Un sueño
        tampoco. La asociación libre tampoco.
      </p>

      <p>
        Lo que hace posible el trabajo analítico es la transferencia: esa
        disposición a hablar con alguien a quien se le supone un saber, esa
        apuesta a que decir algo en ese espacio va a hacer diferencia. Y eso —la
        transferencia— no depende del metro cuadrado compartido. Depende de una
        estructura, y esa estructura viaja perfectamente por fibra óptica.
      </p>

      <p>
        Lo sé porque trabajo online desde hace años, mucho antes de que la
        pandemia lo normalizara. Y lo que encontré no fue una versión degradada
        del análisis. Fue análisis, con sus tiempos, sus impasses, sus giros
        inesperados.
      </p>

      <h2>Lo que sí cambia</h2>

      <p>
        Dicho esto: hay diferencias reales.
      </p>

      <p>
        El cuerpo está menos presente. Ciertas pausas pesan diferente a través
        de una pantalla. La intimidad del consultorio —esa caja negra donde el
        tiempo transcurre de otra manera— no se replica exactamente desde el
        living de casa.
      </p>

      <p>
        Pero acá hay algo interesante: el "desde casa" tiene su propia
        información clínica. La persona que habla desde su cama, desde su auto
        estacionado porque es el único lugar donde puede estar sola, desde una
        oficina en silencio antes de que lleguen los compañeros —ese contexto
        dice cosas. No siempre menos que el consultorio. A veces más.
      </p>

      <p>
        Lo que la pantalla no puede reemplazar del todo es el cuerpo en su
        dimensión más bruta: el peso de alguien que llora en el mismo aire, la
        tensión que ocupa el cuarto cuando algo difícil está por nombrarse. Eso
        existe y no lo voy a minimizar. Pero en la práctica clínica cotidiana,
        esas diferencias rara vez cambian el trabajo de fondo.
      </p>

      <h2>Por qué el debate suele estar mal planteado</h2>

      <p>
        Hay una tendencia a tratar el análisis online como si fuera una
        concesión: lo ideal es presencial, pero si no se puede, bueno, online
        también. Eso me parece equivocado.
      </p>

      <p>
        Para alguien que vive en Mendoza, en Bariloche, en Ciudad de México —o
        incluso en Buenos Aires pero con una logística que hace imposible
        trasladarse dos veces por semana—, el análisis online no es el plan B.
        Es el análisis. El que pueden hacer. El que tiene sentido para su vida.
      </p>

      <p>
        Jerarquizar modalidades según cuál es "más real" dice más sobre cierta
        nostalgia del diván que sobre la clínica efectiva.
      </p>

      <h2>La modalidad no decide por el sujeto</h2>

      <p>
        Si vivís cerca y podés venir, el presencial tiene cosas que vale la pena
        probar. Si no, o si preferís la comodidad del online, arrancamos así y
        trabajamos con lo que hay. En ningún caso el trabajo va a ser de segunda
        categoría.
      </p>

      <p>
        Lo único que importa es que exista un espacio donde poder hablar sin
        tener que cuidar lo que se dice. Eso funciona con pantalla y sin
        pantalla. Siempre funcionó así.
      </p>
    </article>
  );
}

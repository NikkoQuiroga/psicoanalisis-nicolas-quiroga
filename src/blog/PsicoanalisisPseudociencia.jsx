import React from "react";

export default function PsicoanalisisPseudociencia() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El psicoanálisis es una pseudociencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Depende de qué se entienda por ciencia y qué se le exija al psicoanálisis. Si se lo juzga como si fuera una técnica experimental de laboratorio, se pierde su objeto: el sujeto, el deseo, el síntoma y la palabra.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué el psicoanálisis no se evalúa igual que una terapia conductual?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Porque no trabaja el mismo objeto. Una terapia conductual puede medir reducción de conductas o síntomas. El psicoanálisis trabaja la posición subjetiva, el goce, la repetición y el deseo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Lacan rechazaba la formalización?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Lacan recurrió a la lógica, la matemática y la topología para formalizar problemas clínicos, aunque esa formalización no sea equivalente al método experimental clásico.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>¿El psicoanálisis es una pseudociencia?</h1>

      <p className="lead">
        La acusación aparece cada tanto con tono de sentencia: el psicoanálisis
        es pseudociencia. Se dice como quien cierra una puerta. El problema es
        que muchas veces esa frase no piensa demasiado. Funciona más como
        contraseña de época que como argumento.
      </p>

      <p>
        No porque el psicoanálisis deba quedar exento de crítica. Al contrario:
        una práctica clínica que no soporta preguntas se vuelve religión. Pero
        criticar no es reducir. Y una buena crítica empieza por saber qué objeto
        está criticando.
      </p>

      <h2>El malentendido de pedirle laboratorio al inconsciente</h2>

      <p>
        Si alguien espera que el psicoanálisis funcione como una técnica médica
        experimental, va a decepcionarse. El inconsciente no es una bacteria. El
        deseo no se observa con microscopio. El goce no entra prolijamente en
        una escala de medición.
      </p>

      <p>
        Eso no vuelve al psicoanálisis una superstición. Vuelve necesario
        precisar su objeto. La clínica analítica trabaja con palabra, síntoma,
        repetición, transferencia, historia singular. No se ocupa solamente de
        reducir una conducta observable. Se ocupa de la posición de un sujeto
        frente a eso que le pasa.
      </p>

      <p>
        Cuando se borra esa diferencia, la discusión ya empieza mal.
      </p>

      <h2>No todo saber serio se parece a una prueba de laboratorio</h2>

      <p>
        La modernidad nos dejó un ideal fuerte: si algo es verdadero, debe poder
        medirse de cierta manera. Ese ideal produjo avances enormes. También
        produjo una ceguera: creer que lo que no entra en ese molde no existe o
        no merece ser pensado.
      </p>

      <p>
        La pregunta no es si el psicoanálisis debe quedar fuera de todo rigor.
        La pregunta es qué forma de rigor corresponde a una práctica que trabaja
        con singularidad, lenguaje y transferencia.
      </p>

      <p>
        No se analiza una repetición como se mide una presión arterial. No
        porque una sea seria y la otra no, sino porque pertenecen a registros
        distintos.
      </p>

      <h2>Lacan no huyó de la formalización</h2>

      <p>
        Quienes imaginan al psicoanálisis como pura interpretación literaria
        suelen olvidar algo: Lacan intentó formalizar. Usó lógica, matemática,
        grafos, topología. No para disfrazar la clínica de ciencia dura, sino
        para no dejarla reducida a intuición personal.
      </p>

      <p>
        El nudo borromeo, los matemas, los registros simbólico, imaginario y
        real, no son adornos. Son intentos de escribir problemas clínicos. De
        ubicar estructuras. De pensar cómo se anuda un sujeto y qué pasa cuando
        algo se desanuda.
      </p>

      <p>
        Puede discutirse si esos intentos convencen o no. Lo que no se puede
        decir seriamente es que no hay esfuerzo de formalización.
      </p>

      <h2>La pregunta por la eficacia</h2>

      <p>
        Otra objeción aparece rápido: “pero, ¿funciona?”. La pregunta es válida.
        También es tramposa si no se aclara qué quiere decir funcionar.
      </p>

      <p>
        Si funcionar significa borrar un síntoma en pocas sesiones, quizá el
        psicoanálisis no sea siempre el dispositivo adecuado. Si funcionar
        significa mover la posición de un sujeto frente a su deseo, su goce, su
        historia y sus repeticiones, la medición se vuelve más compleja.
      </p>

      <p>
        Hay cambios que no entran bien en una planilla: dejar de obedecer a una
        demanda familiar, poder separarse, no necesitar siempre el mismo tipo de
        fracaso, soportar un deseo propio, no responder con el cuerpo a lo que
        no se pudo decir.
      </p>

      <h2>El riesgo interno del psicoanálisis</h2>

      <p>
        Dicho esto: el psicoanálisis también puede volverse dogmático. Puede
        esconderse detrás de jerga. Puede usar a Lacan como autoridad muerta.
        Puede confundir oscuridad con profundidad. Puede volverse una cofradía
        donde nadie entiende nada pero todos asienten.
      </p>

      <p>
        Esa crítica hay que aceptarla. Porque existe. Y porque daña la clínica.
        Un psicoanálisis vivo no necesita hablar difícil para parecer serio. La
        complejidad no exige impostura.
      </p>

      <p>
        La defensa del psicoanálisis no debería ser una defensa corporativa.
        Debería ser una defensa del lugar que ocupa: el lugar donde la palabra
        de un sujeto importa más que la rapidez con la que puede adaptarse.
      </p>

      <h2>La etiqueta “pseudociencia” a veces tranquiliza demasiado</h2>

      <p>
        Llamar pseudociencia al psicoanálisis puede funcionar como una manera
        de no escuchar lo que incomoda de él. Porque el psicoanálisis insiste en
        algo poco compatible con la época: no todo malestar es un error a
        corregir, no todo síntoma es un enemigo, no toda cura consiste en volver
        productivo al sujeto.
      </p>

      <p>
        Tal vez por eso molesta. Porque no promete adaptación rápida. Porque no
        convierte el deseo en objetivo. Porque no se entrega del todo al ideal
        de transparencia.
      </p>

      <p>
        La discusión seria no es si el psicoanálisis se parece lo suficiente a
        una ciencia natural. La discusión seria es si todavía necesitamos un
        lugar para escuchar aquello que no se deja reducir a conducta, dato o
        rendimiento.
      </p>
    </article>
  );
}

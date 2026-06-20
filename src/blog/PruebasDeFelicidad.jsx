import React from "react";

export default function PruebasDeFelicidad() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué sentimos que hay que demostrar felicidad todo el tiempo?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Porque la época convierte la felicidad en una imagen verificable: rendimiento, disfrute visible, vínculos exhibidos y una vida narrada sin demasiadas grietas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué relación hay entre hablar todo el tiempo y el miedo al vacío?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hablar puede volverse una forma de asegurarse existencia ante el otro. Para quien teme desaparecer si no emite una señal, dejar un vacío se vuelve un acto difícil.",
        },
      },
      {
        "@type": "Question",
        name: "¿El psicoanálisis propone dejar de hablar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. El psicoanálisis no propone silencio como ideal, sino escuchar qué empuja a hablar, qué angustia tapa esa palabra y qué puede aparecer cuando no se rellena todo inmediatamente.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Un tiempo en el que se piden pruebas de felicidad todo el tiempo</h1>

      <p className="lead">
        Hay una exigencia silenciosa en la época: no alcanza con estar bien,
        hay que probarlo. No alcanza con vivir algo, hay que mostrarlo. No
        alcanza con haber descansado, amado, salido, leído, viajado o cambiado;
        algo de eso tiene que quedar presentado como evidencia.
      </p>

      <p>
        La felicidad contemporánea se volvió una escena. Una escena que pide
        testigos, métricas, relato, imagen. Y cuando esa escena no aparece,
        cuando alguien no muestra nada, la sospecha llega rápido: ¿estará mal?,
        ¿se habrá quedado atrás?, ¿no tiene nada para contar?
      </p>

      <h2>La trampa no es mostrar, sino tener que demostrar</h2>

      <p>
        No hay nada necesariamente falso en subir una foto, contar una alegría o
        compartir algo propio. El problema aparece cuando la experiencia empieza
        a necesitar una confirmación externa para sentirse real. Cuando algo no
        termina de ocurrir hasta que alguien lo ve.
      </p>

      <p>
        La posmodernidad no solo multiplicó imágenes. Multiplicó pruebas. Pruebas
        de éxito, de disfrute, de sensibilidad, de autenticidad, de superación.
        Cada quien debe administrar una versión narrable de sí mismo. Una vida
        con sentido, pero también con buena iluminación.
      </p>

      <p>
        En ese régimen, incluso la tristeza tiene que volverse estética, la
        vulnerabilidad tiene que volverse contenido y el descanso tiene que
        parecer productivo. Todo puede ser mostrado. Casi nada puede simplemente
        quedar.
      </p>

      <h2>El miedo a no existir si no se habla</h2>

      <p>
        Dejar un vacío es el acto más difícil para alguien que teme no existir
        si no habla. La frase parece exagerada, pero alcanza con mirar cómo se
        llena cualquier silencio: una aclaración, un mensaje, una historia, una
        respuesta inmediata, una explicación de por qué uno hizo lo que hizo.
      </p>

      <p>
        Hay personas para quienes callar no es descansar. Callar es caer. El
        silencio no aparece como pausa, sino como amenaza. Si no digo algo, si
        no respondo, si no produzco una señal, quizás el otro se vaya. Quizás
        deje de contar. Quizás yo deje de contar para el otro.
      </p>

      <p>
        Entonces se habla. Se habla para no sentir el intervalo. Se habla para
        no dejar que aparezca la pregunta. Se habla para sostener una presencia
        que parece depender de estar siempre emitiendo algo.
      </p>

      <h2>La época empuja a rellenarlo todo</h2>

      <p>
        El vacío tiene mala prensa. Si aparece un espacio sin contenido, hay que
        ocuparlo. Si aparece una espera, hay que mirar el teléfono. Si aparece
        una duda, hay que buscar una respuesta rápida. Si aparece angustia, hay
        que convertirla en plan, diagnóstico, rutina o frase motivacional.
      </p>

      <p>
        Pero no todo vacío es falta de vida. A veces el vacío es el único lugar
        donde algo propio podría empezar a tomar forma. El problema es que ese
        lugar no rinde rápido, no se muestra bien y no da garantías.
      </p>

      <p>
        Por eso cuesta tanto sostenerlo. Porque la época premia el movimiento,
        la respuesta, la disponibilidad, la versión optimizada de uno mismo.
        Sostener un vacío, en cambio, implica no saber todavía. Y no saber
        todavía se volvió casi intolerable.
      </p>

      <h2>La felicidad como mandato</h2>

      <p>
        Una cosa es desear estar mejor. Otra muy distinta es estar obligado a
        parecer bien. La felicidad, cuando se vuelve mandato, deja de ser una
        posibilidad y se convierte en vigilancia. ¿Estoy disfrutando lo
        suficiente? ¿Estoy aprovechando la vida? ¿Estoy haciendo algo valioso
        con mi tiempo?
      </p>

      <p>
        Ese mandato tiene una crueldad particular: si no sos feliz, la culpa
        también parece tuya. No meditaste bien, no organizaste bien tu agenda,
        no elegiste bien, no sanaste lo suficiente, no manifestaste con la
        convicción correcta. La época ofrece técnicas de alivio y al mismo
        tiempo produce nuevas formas de deuda.
      </p>

      <p>
        El sujeto queda atrapado entre dos exigencias: mostrarse auténtico y
        hacerlo de una manera reconocible. Ser singular, pero no demasiado raro.
        Ser libre, pero disponible. Estar bien, pero con pruebas.
      </p>

      <h2>Qué puede hacer un análisis con eso</h2>

      <p>
        Un análisis no viene a enseñar a callar, ni a condenar las redes, ni a
        idealizar una vida sin imágenes. La cuestión es más precisa: escuchar
        qué función cumple esa necesidad de hablar, mostrar, responder,
        explicar, probar.
      </p>

      <p>
        A veces se habla para pedir amor. A veces para evitar una pérdida. A
        veces para tapar una vergüenza. A veces para no encontrarse con una
        pregunta demasiado simple: qué quiero cuando nadie me está mirando.
      </p>

      <p>
        El vacío, en análisis, no es un agujero que haya que decorar rápido. Es
        un lugar de trabajo. Algo puede aparecer ahí justamente porque no fue
        rellenado de inmediato. Algo puede decirse de otra manera cuando no se
        responde tan rápido a la exigencia de demostrar que todo está bien.
      </p>

      <p>
        Tal vez una forma discreta de libertad empiece así: no en mostrarse
        feliz, sino en poder no probar nada por un momento. No desaparecer por
        dejar de hablar. No confundir silencio con inexistencia.
      </p>
    </article>
  );
}

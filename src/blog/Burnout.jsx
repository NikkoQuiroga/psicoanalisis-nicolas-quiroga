import React from "react";

export default function Burnout() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es el burnout y por qué no alcanza con descansar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El burnout es agotamiento crónico por trabajo sostenido, pero descansar sin entender qué lo produce hace que vuelva. No es un problema de batería baja, sino de algo que mantuvo ese ritmo aunque costara caro.",
        },
      },
      {
        "@type": "Question",
        name: "¿El burnout tiene tratamiento psicológico?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Más allá del descanso y los cambios de hábito, el trabajo analítico permite entender qué sostuvo ese ritmo: qué demanda, qué miedo, qué se evitaba mientras se trabajaba sin parar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo sé si lo que tengo es burnout o depresión?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El burnout está ligado al contexto laboral: mejora cuando ese contexto cambia. La depresión tiende a ser más generalizada y persistente. En muchos casos coexisten. Un profesional puede ayudar a distinguirlos.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <h1>Burnout: por qué no alcanza con descansar</h1>

      <p className="lead">
        El 91% de los trabajadores argentinos dice tener burnout. El número es
        tan alto que ya casi no dice nada. Cuando casi todos tienen algo, ese
        algo deja de ser una señal y se convierte en ruido de fondo.
      </p>

      <p>
        Pero el burnout existe. Y la mayoría de lo que se dice sobre él está
        mal.
      </p>

      <p>
        El relato estándar es más o menos así: trabajaste demasiado, tu batería
        se agotó, necesitás recargarla. Tomá vacaciones, hacé ejercicio, dormí
        bien, poné límites. Volvé renovado. El problema con este relato no es
        que sea falso. Es que es incompleto, y esa incompletitud tiene
        consecuencias.
      </p>

      <h2>Lo que la metáfora de la batería no explica</h2>

      <p>
        Una batería se agota porque la usaron. Punto. Pero el burnout no
        funciona así. La pregunta que casi nadie hace es: ¿qué te mantuvo
        corriendo?
      </p>

      <p>
        Hay algo en ese ritmo que no era solo obligación externa. No digo que
        el contexto no importe —el mercado laboral argentino, la precarización,
        la presión real que existe— digo que la mayoría de las personas que
        llegan al límite ya habían tenido señales antes de llegar ahí. Y algo
        en ellas las siguió empujando.
      </p>

      <p>
        A veces es miedo. A quedarse atrás, a decepcionar, a que paren y
        descubran algo que no quieren descubrir sobre sí mismas. A veces es
        identidad: soy lo que produzco, y si dejo de producir no sé bien quién
        soy. A veces el trabajo era el único lugar donde algo funcionaba, donde
        había claridad, donde el caos de afuera no entraba.
      </p>

      <p>
        El descanso no toca ninguna de esas cosas. Por eso vuelve.
      </p>

      <h2>El superyó que dice "podés más"</h2>

      <p>
        Lacan tenía una lectura del superyó —esa instancia que nos exige, nos
        juzga, nos empuja— que invierte la imagen tradicional. No es solo la voz
        que dice "no hagas eso." En su versión contemporánea, dice algo más
        perturbador: <em>gozá, producí, rendí, podés más, no es suficiente.</em>
      </p>

      <p>
        El burnout es el momento en que el cuerpo dice basta antes de que el
        sujeto pueda decirlo. La persona que revisa el mail a las 11 de la
        noche no es una víctima pasiva de su trabajo. Hay algo en ella que
        todavía está respondiendo a esa voz. El cansancio llegó, pero la voz
        sigue.
      </p>

      <p>
        Descansar calcula el cuerpo. No silencia la voz.
      </p>

      <h2>Lo que aparece cuando uno para</h2>

      <p>
        Acá está la parte incómoda. Muchas personas que llegan agotadas
        descubren en el trabajo analítico que el ritmo también servía para algo.
        Para no tener que estar en una relación que no funciona pero tampoco
        terminar. Para no enfrentarse a una decisión que llevan años
        postergando. Para sentir que mientras producen, tienen valor. Para no
        preguntarse qué quieren realmente, porque si se lo preguntan van a tener
        que hacer algo con la respuesta.
      </p>

      <p>
        No lo digo como acusación. Lo digo porque lo veo. Y porque entenderlo
        cambia completamente el trabajo a hacer.
      </p>

      <p>
        Si el agotamiento era también una forma de no estar en otro lado, el
        descanso lo va a poner ahí de golpe. Y sin entender eso, las vacaciones
        pueden ser más angustiantes que el trabajo.
      </p>

      <h2>Entonces, ¿qué hacer?</h2>

      <p>
        Descansar, sí. Urgente, si llegaste al límite. El cuerpo necesita
        recuperarse y eso no es opcional.
      </p>

      <p>
        Pero después, o en paralelo: preguntarse qué sostuvo ese ritmo. No para
        culparse —el contexto existe, las presiones son reales— sino para no
        repetirlo. Porque la persona que vuelve al mismo lugar sin entender qué
        la llevó ahí suele tardar seis meses en volver a quemarse.
      </p>

      <p>
        Esa pregunta —qué me mantuvo corriendo, qué evitaba mientras trabajaba,
        qué hay cuando paro— es una pregunta para hacer con alguien. No sola.
      </p>
    </article>
  );
}

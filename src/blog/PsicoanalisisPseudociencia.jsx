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
            "No encaja de forma simple en esa etiqueta. No es una ciencia natural experimental, pero sí un campo con formalización, transmisión y discusión conceptual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué quiso decir Lacan con topología, toro y nudo borromeo?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Que el sujeto no se explica solo por variables biológicas o psicológicas, sino por una estructura formal de relaciones significantes.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué se diferencia psicoanálisis de conductismo o TCC?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "En el objeto: conductismo y TCC priorizan conducta observable y reducción de síntomas; el psicoanálisis trabaja deseo, goce, repetición y posición subjetiva.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se puede evaluar el psicoanálisis sin pedirle ser física?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Por coherencia interna, transmisión formal, revisión conceptual y sistematicidad clínica; también puede leerse como programa de investigación en sentido lakatosiano.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <h1>
        “El psicoanálisis es una pseudociencia”: una crítica popular, pero
        conceptualmente floja
      </h1>

      <p className="lead">
        La frase <strong>“el psicoanálisis es una pseudociencia”</strong> se volvió
        casi automática en redes. El problema es que suele mezclar dos discusiones
        distintas: qué cuenta como ciencia natural y cómo se formaliza un saber
        sobre el sujeto.
      </p>

      <h2>Una respuesta breve y directa</h2>
      <p>
        El psicoanálisis no funciona como la física experimental, pero eso no
        alcanza para llamarlo pseudociencia. En Lacan hay un intento explícito de
        formalización (lógica, topología, matemas), con conceptos transmisibles y
        discutibles públicamente.
      </p>

      <h2>Citas textuales clave (sin parafrasear)</h2>
      <blockquote>
        “El inconsciente está estructurado como un lenguaje”.
      </blockquote>
      <p>
        Jacques Lacan, “La instancia de la letra en el inconsciente”, en
        <em> Escritos</em>.
      </p>

      <blockquote>
        “El deseo del hombre es el deseo del Otro”.
      </blockquote>
      <p>
        Jacques Lacan, Seminario 11, <em>Los cuatro conceptos fundamentales del
        psicoanálisis</em>.
      </p>

      <blockquote>
        “L'inconscient, c'est la politique”.
      </blockquote>
      <p>
        Jacques Lacan, Seminario 14, <em>La lógica del fantasma</em>.
      </p>

      <h2>Qué hace Lacan cuando usa matemática y topología</h2>
      <p>
        Cuando Lacan recurre al toro, a la banda de Möbius o al nudo borromeo, no
        está describiendo el espacio físico. Está modelando relaciones formales de
        la subjetividad: cómo se anudan lo simbólico, lo imaginario y lo real; cómo
        lo íntimo puede aparecer “afuera” como extimidad.
      </p>
      <p>
        En esa línea, formalizar no equivale a “medir todo”. Equivale a construir
        un lenguaje riguroso para no depender solo del estilo personal del
        terapeuta.
      </p>

      <h2>Cuándo una teoría merece, de verdad, la etiqueta “pseudociencia”</h2>
      <p>
        Una teoría se acerca a la pseudociencia cuando se vuelve inmune a revisión:
        absorbe cualquier objeción sin modificarse, no explicita condiciones de
        crítica y se protege de toda confrontación racional.
      </p>
      <p>
        Por eso, para discutir psicoanálisis conviene preguntar:
      </p>
      <ul>
        <li>¿Tiene coherencia conceptual interna?</li>
        <li>¿Tiene transmisión formal (más allá del carisma)?</li>
        <li>¿Puede revisar sus conceptos frente a la clínica?</li>
        <li>¿Produce descripciones clínicas sistemáticas y comparables?</li>
      </ul>

      <h2>Psicoanálisis, TCC y conductismo: objetos distintos</h2>
      <p>
        El debate serio no es “quién gana” sino qué recorte de realidad trabaja
        cada enfoque.
      </p>
      <ul>
        <li>
          <strong>TCC/conductismo:</strong> síntomas, conducta observable,
          protocolos y métricas.
        </li>
        <li>
          <strong>Psicoanálisis:</strong> repetición, deseo, goce y posición del
          sujeto frente a su síntoma.
        </li>
      </ul>
      <p>
        Para ciertos cuadros agudos, una terapia protocolizada puede ser primera
        línea. Para repeticiones subjetivas más profundas, un análisis puede abrir
        otro tipo de trabajo. No es guerra de escuelas: es precisión clínica.
      </p>

      <h2>Una defensa más sólida: Lakatos</h2>
      <p>
        Imre Lakatos propuso pensar la ciencia también en términos de
        <em> programas de investigación</em>. Es decir, no solo por un experimento
        aislado, sino por fecundidad teórica, consistencia y capacidad de producir
        nuevos desarrollos en el tiempo.
      </p>
      <p>
        Desde ese marco, el psicoanálisis puede discutirse críticamente sin
        reducirlo ni a “religión” ni a “física fallida”.
      </p>

      <h2>Conclusión</h2>
      <p>
        Llamar “pseudociencia” al psicoanálisis como reflejo automático empobrece
        el debate. También lo empobrece defenderlo como dogma. La discusión adulta
        pasa por su arquitectura conceptual, sus límites y su potencia clínica.
      </p>

      <h2>Bibliografía mínima recomendada</h2>
      <ul>
        <li>
          Freud, S. (1915/2012). <em>Lo inconsciente</em>. En Obras Completas, Tomo
          XIV. Buenos Aires: Amorrortu.
        </li>
        <li>
          Lacan, J. (1966/2009). <em>Escritos 1 y 2</em>. Buenos Aires: Siglo XXI.
        </li>
        <li>
          Lacan, J. (1964/1987). <em>El Seminario, Libro 11: Los cuatro conceptos
          fundamentales del psicoanálisis</em>. Buenos Aires: Paidós.
        </li>
        <li>
          Lacan, J. (1974-1975/2006). <em>El Seminario, Libro 22: RSI</em>.
        </li>
        <li>
          Miller, J.-A. (comp.) (2005). <em>El partenaire-síntoma</em>. Buenos
          Aires: Paidós.
        </li>
        <li>
          Lakatos, I. (1978). <em>The Methodology of Scientific Research
          Programmes</em>. Cambridge: Cambridge University Press.
        </li>
        <li>
          Popper, K. (1963/2002). <em>Conjectures and Refutations</em>. London:
          Routledge.
        </li>
      </ul>

      <h2>FAQ</h2>
      <h3>¿El psicoanálisis es una pseudociencia?</h3>
      <p>
        No de forma simple. Puede criticarse y discutirse, pero no encaja de modo
        automático en esa categoría.
      </p>

      <h3>¿Por qué Lacan usa matemática y topología?</h3>
      <p>
        Para formalizar una teoría del sujeto y evitar que todo quede en intuición
        clínica o estilo personal.
      </p>

      <h3>¿Se puede combinar con TCC?</h3>
      <p>
        Sí, según diagnóstico, urgencia y objetivos terapéuticos.
      </p>

      <h3>¿Qué sería una crítica rigurosa al psicoanálisis?</h3>
      <p>
        Mostrar inconsistencias lógicas, límites técnicos o fallas clínicas
        argumentadas, no solo usar etiquetas.
      </p>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </article>
  );
}

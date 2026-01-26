import React from "react";

export default function Autosabotaje() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El autosabotaje es lo mismo que procrastinación?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No siempre. La procrastinación es una forma común de autosabotaje, pero también hay autosabotaje en vínculos, proyectos, hábitos de salud y decisiones económicas. Procrastinar es retrasar voluntariamente una acción aun esperando consecuencias negativas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué me autosaboteo justo cuando todo va bien?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Porque el éxito aumenta exposición, evaluación y responsabilidad. El autosabotaje puede funcionar como una defensa contra el miedo al cambio, la pérdida o el juicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué relación tiene el goce con el autosabotaje?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "En psicoanálisis, el goce refiere a una satisfacción más allá del placer, incluso dolorosa, que puede sostener repeticiones. Esto ayuda a entender por qué algo nocivo puede insistir.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <h1>¿Por qué nos autosaboteamos? Cómo romper el ciclo del autosabotaje</h1>

      <p className="lead">
        Mucha gente pregunta “¿por qué sigo haciendo esto si sé que me hace mal?”.
        La respuesta es incómoda: el autosabotaje no es solo falta de voluntad,
        sino una solución psíquica que reduce ansiedad, evita exposición y sostiene
        una forma de satisfacción paradójica (lo que el psicoanálisis llama goce).
      </p>

      <h2>Respuesta corta (para snippet de Google)</h2>
      <p>
        Nos autosaboteamos cuando una conducta que “sabemos” que nos hace mal
        funciona, al mismo tiempo, como una solución psíquica: reduce ansiedad,
        evita exposición, protege una identidad y sostiene una satisfacción
        paradójica (goce).
      </p>

      <h2>“¿Por qué sigo haciendo esto si sé que me hace mal?”</h2>
      <p>
        Porque el saber no gobierna solo. En la vida real, muchísima gente entiende
        perfectamente qué tendría que hacer: dormir antes, terminar el proyecto, no
        mandar ese mensaje venenoso, no volver con la persona que la destruye… y aun
        así repite. El punto incómodo es este: si se repite, algo obtiene.
      </p>
      <p>
        No necesariamente placer. A veces obtiene alivio inmediato. A veces obtiene
        excusa. A veces obtiene castigo. A veces obtiene control. Y a veces obtiene
        esa satisfacción rara que Lacan ubica más allá del principio del placer
        (jouissance / goce).
      </p>

      <h2>El error típico: creer que el autosabotaje es “falta de voluntad”</h2>
      <p>
        Si fuera solo disciplina, se arreglaría con un buen lunes, una app de hábitos
        y un par de frases motivacionales. Pero el autosabotaje suele tener una
        estructura más parecida a un circuito que a un “fallo”.
      </p>
      <p>
        En psicología científica, un pariente muy estudiado es el <em>self-handicapping</em>
        (auto-obstaculización): crear obstáculos o elegir condiciones que te den
        coartadas si fallás (“no dormí”, “igual no estudié”, “estaba en cualquiera”).
        La idea es proteger la autoestima y controlar atribuciones del fracaso.
      </p>
      <p>
        En castellano: me saboteo para no quedar totalmente expuesto.
      </p>

      <h2>El autosabotaje como solución (sí, solución)</h2>
      <p>
        El autosabotaje suele ser una forma de evitar un costo psíquico mayor. Por
        eso se siente tan difícil de cortar: para una parte tuya, era el mejor
        arreglo disponible.
      </p>
      <ul>
        <li>
          <strong>El juicio final:</strong> si termino, me evalúan (y se cae la
          fantasía de “podría haber sido brillante”).
        </li>
        <li>
          <strong>La exposición:</strong> si avanzo, me ven. Y si me ven, me
          critican.
        </li>
        <li>
          <strong>El duelo:</strong> si cambio, muere una identidad vieja (la del
          “yo soy así”).
        </li>
        <li>
          <strong>La responsabilidad:</strong> si me va bien, ya no puedo culpar al
          mundo con la misma comodidad.
        </li>
      </ul>

      <h2>Procrastinación: el autosabotaje más socialmente aceptado</h2>
      <p>
        La procrastinación se define como posponer voluntariamente una acción aunque
        esperás estar peor por esa demora. No es solo “mala gestión del tiempo”: es
        un problema de autorregulación muy estudiado.
      </p>
      <p>
        Y la parte venenosa es que la procrastinación da una recompensa inmediata:
        baja tensión ahora… a costa de multiplicarla después.
      </p>

      <h2>El concepto que explica lo que la voluntad no explica: goce (Lacan)</h2>
      <p>
        Si querés entender el autosabotaje sin moralina, el concepto de goce es una
        herramienta potente. En la lectura filosófica de Lacan, el goce no es
        “placer”. Es un tipo de satisfacción que puede incluir dolor, exceso,
        compulsión: está “más allá del principio del placer”.
      </p>
      <p>
        Eidelsztein (trabajando Lacan) insiste en algo clave: el goce no es una
        nubecita mística; puede pensarse como una “sustancia gozante”, una
        consistencia que se pega al modo de vivir del sujeto (y por eso no se
        “corrige” con un tip).
      </p>
      <p>
        Traducción terrenal: hay hábitos que duelen, pero también sostienen. Y lo
        que sostiene cuesta soltarlo.
      </p>

      <h2>Tres circuitos clásicos del autosabotaje (y qué se gana con cada uno)</h2>
      <h3>1) Procrastinar “inteligente”</h3>
      <ul>
        <li><strong>Gatillo:</strong> tarea importante + posibilidad de evaluación.</li>
        <li><strong>Conducta:</strong> posponer, dispersarse, “mejor lo hago cuando esté inspirado”.</li>
        <li><strong>Ganancia:</strong> evito el juicio (por ahora).</li>
        <li><strong>Costo:</strong> culpa, estrés, rendimiento peor, autoestima golpeada.</li>
      </ul>
      <p>
        Esto encaja con la idea de procrastinación como falla de autorregulación
        (no ignorancia).
      </p>

      <h3>2) Sabotear vínculos</h3>
      <ul>
        <li><strong>Gatillo:</strong> intimidad real, estabilidad, alguien que te quiere en serio.</li>
        <li><strong>Conducta:</strong> armar pelea, celos, pruebas, desaparición, frialdad.</li>
        <li><strong>Ganancia:</strong> recupero control / confirmo guion (“me van a dejar”).</li>
        <li><strong>Costo:</strong> pierdo vínculo, repito la misma novela.</li>
      </ul>
      <p>
        El punto no es “elegís mal” (a veces sí). Es que el vínculo toca una zona
        donde el sujeto se desorganiza: la estabilidad puede generar más angustia
        que el conflicto conocido.
      </p>

      <h3>3) Abandonar proyectos justo antes del final</h3>
      <ul>
        <li><strong>Gatillo:</strong> el proyecto empieza a volverse real (se publica, se vende, se muestra).</li>
        <li><strong>Conducta:</strong> lo dejo en 80% (el porcentaje perfecto para no cerrar).</li>
        <li><strong>Ganancia:</strong> sostengo la fantasía de potencial infinito.</li>
        <li><strong>Costo:</strong> estancamiento, resentimiento, sensación de vida “en pausa”.</li>
      </ul>
      <p>
        Este patrón se lleva muy bien con el self-handicapping: si no cierro, nunca
        quedo totalmente expuesto al veredicto.
      </p>

      <h2>“No merezco”, miedo al cambio, baja autoestima… sí, pero con bisturí</h2>
      <h3>“No merezco”</h3>
      <p>
        A veces no es una idea aislada. Es una lealtad: a una historia familiar, a
        un lugar en el grupo, a un mandato invisible (“si te va bien, te odiamos / te
        vas / nos dejás atrás”).
      </p>

      <h3>Miedo al cambio</h3>
      <p>
        El cambio no es solo ganar. Es perder una identidad, perder una excusa,
        perder un personaje.
      </p>

      <h3>Baja autoestima</h3>
      <p>
        Muchas veces no es “falta de amor propio”. Es exceso de ideal: una vara tan
        alta que cualquier paso real parece vergonzoso. Y entonces es más “seguro”
        sabotearse.
      </p>

      <h2>El superyó moderno: no solo prohíbe, también exige</h2>
      <p>
        En la clínica se ve algo paradójico: cuanto más te exigís “ser mejor”, más
        chances hay de que termines en un acto autodestructivo. No porque seas
        tonto. Porque la exigencia puede funcionar como un látigo que fabrica culpa,
        y la culpa empuja a repetir el circuito (castigo incluido). Ese es un modo
        frecuente en que el goce se engancha a la vida: “pierdo, sufro, me culpo,
        vuelvo a perder”.
      </p>

      <h2>Cómo romper el ciclo del autosabotaje (sin prometer magia)</h2>
      <p>
        Esto no va de motivación. Va de intervenir el circuito.
      </p>

      <h3>Paso 1: Nombrá el loop con precisión</h3>
      <p>
        No “me autosaboteo”. Más concreto: “Procrastino cuando una tarea implica
        evaluación.” “Ataco el vínculo cuando la cosa se pone estable.” “Abandono
        cuando falta el cierre.”
      </p>

      <h3>Paso 2: Identificá la ganancia oculta (la parte honesta)</h3>
      <ul>
        <li>¿Qué evito si NO hago esto?</li>
        <li>¿Qué alivio siento en el momento?</li>
        <li>¿Qué escena interna se sostiene con este fracaso?</li>
      </ul>

      <h3>Paso 3: Detectá el mecanismo de “coartada”</h3>
      <p>
        Si hay self-handicapping, suele haber frases tipo:
      </p>
      <ul>
        <li>“No tuve tiempo” (cuando sí hubo tiempo, pero no hubo tolerancia al malestar).</li>
        <li>“No era el momento” (cuando era el momento, pero daba miedo).</li>
        <li>“No me salió porque X” (X como cobertura total).</li>
      </ul>
      <p>
        Esto está muy estudiado como estrategia para manejar atribuciones y proteger
        la imagen del yo.
      </p>

      <h3>Paso 4: Hacé un corte mínimo (acto chico, repetible)</h3>
      <p>
        Regla de oro: no negocies con tu yo ideal, negociá con tu yo real.
      </p>
      <ul>
        <li>12 minutos de trabajo cronometrado (no “terminar todo”).</li>
        <li>Enviar un borrador feo (no “la versión perfecta”).</li>
        <li>Tener una conversación de 10 líneas (no “resolver la relación”).</li>
      </ul>

      <h3>Paso 5: Sostené el corte con repetición</h3>
      <p>
        Si el goce funciona como una “sustancia” pegada al modo de vida, no se
        despega con un insight heroico, sino con nuevas repeticiones.
      </p>

      <h2>Señales de que no es “un hábito” y conviene trabajarlo en terapia</h2>
      <ul>
        <li>El patrón se repite en áreas distintas (trabajo, pareja, cuerpo).</li>
        <li>Hay compulsión: “lo hice y ni sé por qué”.</li>
        <li>Te deja con culpa persistente, ansiedad o depresión.</li>
        <li>La vida se siente como “preparación eterna”, nunca ejecución.</li>
      </ul>

      <h2>Conclusión (estilo Žižek, sin humo)</h2>
      <p>
        El problema no es que “no sabés”. El problema es que sabés y aun así repetís.
        Entonces la pregunta útil no es “¿cómo dejo de hacerlo ya?”, sino: ¿qué
        función cumple esto en mi economía psíquica? ¿Qué goce sostiene? ¿Qué costo
        evita? Cuando esa función se vuelve visible, el síntoma pierde parte de su
        poder hipnótico. Y ahí aparece algo raro y lindo: por primera vez, el cambio
        deja de ser una amenaza y empieza a ser una opción.
      </p>

      <h2>Preguntas frecuentes (FAQ)</h2>
      <h3>¿El autosabotaje es lo mismo que procrastinación?</h3>
      <p>
        No siempre. La procrastinación es una forma común de autosabotaje, pero
        también hay autosabotaje en vínculos, proyectos, hábitos de salud y
        decisiones económicas. La procrastinación se define como retrasar
        voluntariamente pese a esperar consecuencias negativas.
      </p>

      <h3>¿Por qué me autosaboteo justo cuando todo va bien?</h3>
      <p>
        Porque “que vaya bien” aumenta exposición, responsabilidad y riesgo de
        pérdida real. A veces la mente prefiere el conflicto conocido al territorio
        nuevo.
      </p>

      <h3>¿El autosabotaje tiene explicación científica?</h3>
      <p>
        Sí: en psicología se estudian fenómenos cercanos como self-handicapping
        (auto-obstaculización) y procrastinación como falla de autorregulación.
      </p>

      <h3>¿Qué tiene que ver el “goce” con autosabotearse?</h3>
      <p>
        El goce (Lacan) nombra una satisfacción más allá del placer, incluso
        dolorosa, que puede sostener repeticiones. Eidelsztein trabaja la idea de
        la “sustancia gozante” para pensar su consistencia.
      </p>

      <h2>Referencias</h2>
      <ul>
        <li>Eidelsztein, A. “El concepto de goce: un nuevo paradigma en psicoanálisis (2 de 2)”.</li>
        <li>Johnston, A. “Jacques Lacan”, Stanford Encyclopedia of Philosophy.</li>
        <li>Steel, P. (2007). <em>The Nature of Procrastination: A Meta-Analytic and Theoretical Review</em>.</li>
        <li>Rozental, A. et al. (2022). Procrastinación entre estudiantes (<em>Frontiers in Psychology</em>).</li>
        <li>Berglas, S. (1978). Self-handicapping (PubMed).</li>
        <li>Jones, E. E. &amp; Berglas, S. (1978). Self-handicapping strategies (SAGE DOI).</li>
        <li>Svartdal, F. et al. (2022). Análisis funcional de procrastinación (PMC).</li>
        <li>“Goce y topología…”, publicación académica (PDF).</li>
      </ul>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </article>
  );
}

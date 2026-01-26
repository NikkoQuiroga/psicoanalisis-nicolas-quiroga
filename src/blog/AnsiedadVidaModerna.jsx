import React from "react";

export default function AnsiedadVidaModerna() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuáles son los síntomas más comunes de ansiedad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tensión, preocupación persistente, irritabilidad, fatiga, problemas de concentración, alteraciones del sueño y síntomas físicos como tensión muscular.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un ataque de pánico?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Un episodio abrupto de miedo o malestar intenso con pico en minutos y síntomas físicos/cognitivos característicos, como palpitaciones, disnea o miedo a morir.",
        },
      },
      {
        "@type": "Question",
        name: "¿La hiperconectividad se asocia con ansiedad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El uso problemático del smartphone se asocia con síntomas de ansiedad y depresión en metaanálisis.",
        },
      },
      {
        "@type": "Question",
        name: "¿La desigualdad económica influye en salud mental?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hay literatura y reportes institucionales que discuten la relación entre desigualdad, vulnerabilidad y resultados de salud, incluida salud mental, y el impacto de políticas económicas en distribución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo conviene consultar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cuando la ansiedad deteriora sueño, trabajo, vínculos, o aparecen crisis recurrentes. La consulta permite evaluar severidad y estrategia clínica.",
        },
      },
    ],
  };

  return (
    <article className="prose-lite">
      <h1>Ansiedad en la vida moderna: por qué va en aumento y cómo manejarla</h1>

      <p className="lead">
        La <strong>ansiedad en la vida moderna</strong> no es solo un problema
        individual: expresa el modo en que trabajamos, nos conectamos y nos
        relacionamos con el futuro. En Argentina urbana, el “malestar psicológico”
        con síntomas ansiosos y/o depresivos viene en aumento entre 2010 y 2024,
        y en 2024 ronda “casi tres de cada diez” adultos. A escala global, la OMS
        reportó un aumento del 25% en la prevalencia de ansiedad y depresión durante
        el primer año de la pandemia.
      </p>

      <h2>Respuesta corta (para snippet de Google)</h2>
      <p>
        La ansiedad aumenta porque la vida moderna combina estrés laboral, alta
        exigencia, hiperconectividad e incertidumbre económica. El resultado es un
        cuerpo en estado de alerta crónica. Se puede manejar mejor con lectura
        clínica, límites de atención y prácticas breves de regulación como la
        exhalación prolongada.
      </p>

      <h2>1) Qué entendemos por ansiedad</h2>
      <p>
        En términos generales, la ansiedad se caracteriza por tensión,
        preocupación y cambios físicos. En clínica, interesa distinguir entre:
      </p>
      <ul>
        <li>
          <strong>Ansiedad sostenida:</strong> preocupación excesiva y persistente,
          con tensión, irritabilidad, problemas de concentración y sueño.
        </li>
        <li>
          <strong>Ataques de pánico:</strong> oleadas bruscas de miedo o malestar
          intenso que alcanzan un pico en minutos, con palpitaciones, disnea,
          temblores, mareo, miedo a morir o perder el control.
        </li>
      </ul>
      <p>
        Estas descripciones no son etiquetas para “encasillar”, sino coordenadas
        para leer qué está haciendo el cuerpo cuando se activa.
      </p>

      <h2>2) Tres motores contemporáneos de la ansiedad</h2>
      <h3>2.1 Estrés laboral y precariedad subjetiva</h3>
      <p>
        La vida moderna empuja a un régimen de evaluación constante: objetivos que
        se corren, disponibilidad permanente y comparación con estándares
        cambiantes. Incluso cuando la economía “se estabiliza”, muchas biografías
        no lo hacen. La ansiedad aparece, en parte, como administración anticipada
        del riesgo.
      </p>

      <h3>2.2 Hiperconectividad y economía de la atención</h3>
      <p>
        No es solo “estar mucho con el celular”, sino el modo de uso: compulsión,
        interrupción permanente y dificultad para cerrar el día. Una metaanálisis
        encontró asociación entre uso problemático del smartphone y síntomas de
        ansiedad y depresión.
      </p>
      <p>
        La pregunta clínica no es “te hace mal el teléfono”, sino: ¿qué función
        cumple esa conexión constante en tu economía psíquica? ¿Calma, anestesia,
        excita, posterga, reemplaza?
      </p>

      <h3>2.3 Incertidumbre económica, desigualdad y futuro inestable</h3>
      <p>
        Ciertas políticas económicas de las últimas décadas se sostuvieron en
        promesas de “crecimiento que derrama”, típicamente ligadas a enfoques de
        oferta y recortes impositivos como incentivo a la inversión. Un estudio
        comparativo sobre recortes de impuestos a los más ricos (18 países,
        1965–2015) halló aumento de desigualdad sin efectos significativos en
        crecimiento o desempleo. El FMI también discutió cómo algunos paquetes de
        políticas asociados al “neoliberalismo” incrementaron desigualdad, con
        costos para la estabilidad del crecimiento.
      </p>
      <p>
        Si el futuro se vuelve estructuralmente incierto, la ansiedad deja de ser
        un “error” y pasa a ser una respuesta esperable. El costo es que el cuerpo
        paga hoy un mañana que no termina de llegar.
      </p>

      <h2>3) Marx: plusvalía y el excedente extraído del tiempo</h2>
      <p>
        En Marx, la <strong>plusvalía</strong> nombra el excedente producido por el
        trabajo más allá de lo necesario para reproducir el salario: el beneficio
        surge del trabajo excedente. Una lectura contemporánea posible es esta:
        además del excedente económico clásico, hoy hay una extracción sistemática
        de tiempo disponible, atención y energía subjetiva. No hace falta postular
        una conspiración; alcanza con observar cómo se organizan los incentivos:
        productividad, multitarea, métricas, urgencia.
      </p>
      <p>
        La cuestión es delicada: ¿cuánta ansiedad se juega como “sobreadaptación”
        a un sistema que premia estar siempre listo?
      </p>

      <h2>4) Lacan: objeto a, goce y el plus-de-goce como homología</h2>
      <p>
        Lacan introduce el <strong>objeto a</strong> como causa del deseo, y trabaja
        la noción de <strong>goce</strong> como algo que desborda la lógica simple de
        satisfacción. En el Seminario XVI aparece el <strong>plus-de-goce</strong>,
        formulado explícitamente en homología con la plusvalía.
      </p>
      <p>
        Una consecuencia clínica de esta articulación es potente: el circuito no
        se reduce a “quiero X y cuando lo tenga me calmo”. Muchas veces el sistema
        se organiza como producción de deseo y, a la vez, producción de un
        excedente que no cierra. Allí la ansiedad puede funcionar como señal de
        que el sujeto quedó tomado por una lógica de “más”: más rendimiento, más
        opciones, más optimización, más consumo de promesas.
      </p>
      <p>
        Pregunta inevitable: ¿qué parte de tu ansiedad es miedo… y qué parte es el
        efecto de sostener un “más” que no tiene punto de detención?
      </p>

      <h2>5) Žižek: superyó contemporáneo y mandato de goce</h2>
      <p>
        Žižek retoma a Lacan para pensar un superyó que no opera solo como
        prohibición, sino como permiso que se invierte en obligación: “podés” que
        se vuelve “tenés que”. En esta clave, el malestar no surge únicamente del
        límite, sino también de la exigencia de disfrutar, de cumplir, de
        aprovechar, de no quedar afuera.
      </p>
      <p>
        Desde ahí, la ansiedad puede leerse como el reverso lógico de un ideal
        contemporáneo: libertad entendida como rendimiento constante de uno mismo.
      </p>

      <h2>6) Un recurso práctico: respiración con exhalación prolongada</h2>
      <p>
        En una estadía en Minobu, Japón, durante una experiencia de shukubō,
        incorporé una práctica simple que uso en algunos casos para bajar
        activación fisiológica. No reemplaza un tratamiento cuando hace falta,
        pero puede servir como intervención breve.
      </p>
      <h3>Práctica de 3 a 5 minutos</h3>
      <ol>
        <li>Sentate con la espalda estable, sin rigidez.</li>
        <li>Inhalá suave por nariz.</li>
        <li>Exhalá más largo que la inhalación, sin forzar.</li>
        <li>Contá exhalaciones del 1 al 10. Si te perdés, volvés a 1.</li>
        <li>Si aparecen pensamientos, registralos y retorná al conteo.</li>
      </ol>
      <p>
        La exhalación prolongada es una manera directa de decirle al cuerpo: en
        este momento no hay urgencia real. El objetivo no es “vaciar la mente”,
        sino recuperar margen.
      </p>

      <h2>7) Preguntas de trabajo (para abrir, no para cerrar)</h2>
      <ul>
        <li>¿Qué está defendiendo tu ansiedad: un vínculo, una imagen, una posición, un ideal?</li>
        <li>¿Qué futuro intentás controlar a fuerza de anticipación?</li>
        <li>¿Qué parte de tu día está organizada por obligación y no por deseo?</li>
        <li>¿Qué satisfacción extraña aparece en la repetición de la preocupación?</li>
        <li>¿Qué objeto promete “calma” y, sin embargo, renueva la inquietud?</li>
        <li>¿Qué ganancia subjetiva hay en no detenerse nunca?</li>
        <li>Si la ansiedad fuese un mensaje, ¿qué estaría señalando sobre tu modo de vivir?</li>
      </ul>

      <h2>FAQ</h2>
      <h3>¿Cuáles son los síntomas más comunes de ansiedad?</h3>
      <p>
        Tensión, preocupación persistente, irritabilidad, fatiga, problemas de
        concentración, alteraciones del sueño y síntomas físicos como tensión
        muscular.
      </p>

      <h3>¿Qué es un ataque de pánico?</h3>
      <p>
        Un episodio abrupto de miedo o malestar intenso con pico en minutos y
        síntomas físicos/cognitivos característicos, como palpitaciones, disnea o
        miedo a morir.
      </p>

      <h3>¿La hiperconectividad se asocia con ansiedad?</h3>
      <p>
        El uso problemático del smartphone se asocia con síntomas de ansiedad y
        depresión en metaanálisis.
      </p>

      <h3>¿La desigualdad económica influye en salud mental?</h3>
      <p>
        Hay literatura y reportes institucionales que discuten la relación entre
        desigualdad, vulnerabilidad y resultados de salud, incluida salud mental,
        y el impacto de políticas económicas en distribución.
      </p>

      <h3>¿Cuándo conviene consultar?</h3>
      <p>
        Cuando la ansiedad deteriora sueño, trabajo, vínculos, o aparecen crisis
        recurrentes. La consulta permite evaluar severidad y estrategia clínica.
      </p>

      <hr />

      <section
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          padding: "16px",
          border: "1px solid #e5e5e5",
          borderRadius: "12px",
        }}
      >
        <img
          src="RUTA_DE_TU_IMAGEN.jpg"
          alt="Lic. Nicolás Quiroga - Psicólogo"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "999px",
          }}
        />
        <div>
          <h3 style={{ margin: "0 0 6px 0" }}>Para trabajarlo en consulta</h3>
          <p style={{ margin: "0 0 10px 0" }}>
            Si te interesa abordar la ansiedad con un encuadre clínico y una
            lectura de época, podés escribirme.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Contacto:</strong> TU_CONTACTO_AQUÍ
          </p>
          <p style={{ margin: 0 }}>
            <strong>Web:</strong> www.nikkoquiroga.com
          </p>
        </div>
      </section>

      <h2>Referencias y links</h2>
      <ul>
        <li>
          OMS, aumento 25% primer año pandemia: https://www.who.int/es/news/item/02-03-2022-covid-19-pandemic-triggers-25-increase-in-prevalence-of-anxiety-and-depression-worldwide
        </li>
        <li>
          ODSA-UCA, Malestar Psicológico (PDF): https://wadmin.uca.edu.ar/public/ckeditor/Observatorio%20Deuda%20Social/Presentaciones/2025/Observatorio_Presentacion_Prensa_MPsi.pdf
        </li>
        <li>
          Definición general de ansiedad, APA: https://www.apa.org/topics/anxiety
        </li>
        <li>
          Síntomas/criterios clínicos ansiedad (NIMH): https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad
        </li>
        <li>
          Ataque de pánico (criterios DSM, NCBI): https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t10/
        </li>
        <li>
          Meta-análisis smartphone y ansiedad/depresión: https://pubmed.ncbi.nlm.nih.gov/34585243/
        </li>
        <li>
          Marx y plusvalía, SEP: https://plato.stanford.edu/entries/marx/
        </li>
        <li>
          Supply-side economics, Britannica: https://www.britannica.com/money/supply-side-economics
        </li>
        <li>
          Recortes de impuestos a ricos y desigualdad (Hope &amp; Limberg): https://academic.oup.com/ser/article/20/2/539/6500315
        </li>
        <li>
          IMF, “Neoliberalism: Oversold?”: https://www.imf.org/external/pubs/ft/fandd/2016/06/ostry.htm
        </li>
        <li>
          Lacan, SEP: https://plato.stanford.edu/entries/lacan/
        </li>
        <li>
          Lacan, Seminario XVI (PDF): https://www.valas.fr/IMG/pdf/THE-SEMINAR-OF-JACQUES-LACAN-XVI_d_un_Autre_a_l_autre.pdf
        </li>
        <li>
          Vanheule sobre homología plusvalía/plus-de-goce: https://pmc.ncbi.nlm.nih.gov/articles/PMC5145885/
        </li>
        <li>
          Žižek, “You May!” (LRB): https://www.lrb.co.uk/the-paper/v21/n06/slavoj-zizek/you-may%21
        </li>
      </ul>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </article>
  );
}

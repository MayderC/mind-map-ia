import { MAP_TYPES } from "@/shared/constants"


const summaryTemplate = (text: string) => {

return `

  Por favor, genera el resumen y la explicación en el idioma del  [Texto proporcionado]. NO traduzcas el texto proporcionado a otro idioma. Responde en el idioma original del [Texto proporcionado]. si [Texto proporcionado] es en inglés responde en inglés, si es español responde en español, etc.

  [Texto proporcionado]

  ${text}

  [Fin del texto proporcionado]

  Preguntas de consulta: sobre el [Texto proporcionado] anteriormente, responde a las siguientes preguntas:

  1. Resumen de subtemas: Por favor, identifica los subtemas principales en el texto proporcionado. Resumen cada subtema de manera concisa (aproximadamente 1-2 oraciones).
  2. Resumen general: Resumen el texto proporcionado de manera breve y precisa (aproximadamente 5-7 oraciones).
  3. Explicación por IA: Por favor, proporciona una explicación muy breve y clara de cada subtema identificado, utilizando lenguaje sencillo y accesible para estudiantes. Asegúrate de que la explicación esté basada únicamente en el texto proporcionado y no incluya información adicional. 

  Especificaciones adicionales: Por favor, utiliza un lenguaje claro y conciso en el resumen y la explicación. Asegúrate de que el resumen y la explicación estén libres de errores gramaticales y de estilo. Si es posible, proporciona ejemplos o ilustraciones(No images ni URLS) para ayudar a los estudiantes a entender mejor los conceptos.

  Marca cada una de las preguntas de consulta como subtítulo de nivel 2 (##) 
  
  Marca cada subtema identificado en el texto proporcionado como subtitulo de nivel 3 (###) y proporciona un resumen conciso de cada subtema. Utiliza un subtítulo de nivel 2 (##) para el resumen general del texto proporcionado. Utiliza listas y viñetas para organizar la información de manera clara y estructurada. 

  Formato de respuesta: Por favor, responde en formato markdown, utilizando títulos y listas para organizar la información de manera clara y estructurada. Asegúrate de que la respuesta sea coherente y fácil de leer para los estudiantes.

  Muy importante: Por favor, asegúrate responder en el idioma del texto proporcionado. Aunque las instrucciones esten otro idioma, la respuesta debe ser en el idioma del texto proporcionado.

  Responde en el idioma del texto proporcionado. NO traduzcas el texto proporcionado a otro idioma. Responde en el idioma original del texto proporcionado.
  
  NOTA: no brindez información sobre las preguntas de consulta estas son solo para generar el resumen.
  Nota:Asegúrate de que el texto proporcionado sea claro y conciso, y que no contenga información adicional que pueda confundir a los estudiantes.
  `


}
const mermaidSyntaxExplanation = `
Basic support for fontawesome
It is possible to add icons from fontawesome.
The icons are accessed via the syntax fa:#icon class name#.

[Mermaid syntax]
  Shape styles	[rectangle]	(rounded rectangle)
    ((circle))	{diamond}
  Connector styles	arrow: A-->B	dotted: A-.-->B
    no arrow: A---B	with a label: A-->|label|B
  Diagram types:	graph
    gantt	sequenceDiagram
    stateDiagram	classDiagram
    gitgraph	flowchart
    mindmap	requirementDiagram
    erDiagram	journey
    C4Context

  Gantt:	[task state]: done, active, crit, after	section 
  Gitgraph:	[actions]: commit, branch, checkout, merge	 
  UML	[lifelines]:participant	activate, [container: loop, alt, opt	class
  Information	comment: %%	note

[Mermaid syntax]

Styling: Customize the appearance of nodes, links, and text using CSS-like styles. Example: A[Node A] {stroke: #333; fill: #FFF}

`

const mermaidSyntaxExamples = `

  graph TD
    start((start)) --> lock_booking
    lock_booking --> process_payment
    process_payment --> successful_payment{"success?"}
    successful_payment -->|NO|release_booking
    successful_payment -->|YES|reserve_booking
    reserve_booking --> send_email
    finish(((finish)))
    send_email --> finish
    release_booking --> finish



  flowchart LR
      A[Hard edge] -->|Link text| B(Round edge)
      B --> C{Decision}
      C -->|One| D[Result one]
      C -->|Two| E[Result two]


  erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses



  gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit


  mindmap
    root((mindmap))
      Origins
        Long history
        ::icon(fa fa-book)
        Popularisation
          British popular psychology author Tony Buzan
      Research
        On effectiveness<br/>and features
        On Automatic creation
          Uses
              Creative techniques
              Strategic planning
              Argument mapping
      Tools
        Pen and paper
        Mermaid

[utiliza los siguientes ejemplos para crear diagramas mermaid mas complejos]

mindmap
    id[I am a square]

mindmap
    id(I am a rounded square)

mindmap
    id((I am a circle))



NOTA: NO INCLUYAS TEXTO EN ESTA SECCIÓN. SI HAY ERRORES EN EL TEXTO PROPORCIONADO, NO LOS INCLUYAS EN LA RESPUESTA.
INTENTA NO INCLUIR ERRORES COMUNES EN LA RESPUESTA.

NO olvides las comillas al inicio del diagrama y al final del diagrama.

`

const allow_diagramn= `
${MAP_TYPES.FLOWCHART.toLocaleLowerCase()}
${MAP_TYPES.GANTT.toLocaleLowerCase()}
${MAP_TYPES.CLASS.toLocaleLowerCase()}
${MAP_TYPES.MINDMAP.toLocaleLowerCase()}
${MAP_TYPES.SEQUENCE.toLocaleLowerCase()}
${MAP_TYPES.STATE.toLocaleLowerCase()}
`

const commonErrors = `
  Error: Parse error on line 2:
...ar o practicar yoga|> B    A -->|Aument
-----------------------^
Expecting 'SPACE', 'AMP', 'COLON', 'DOWN', 'DEFAULT', 'NUM', 'COMMA', 'NODE_STRING', 'BRKT', 'MINUS', 'MULT', 'UNICODE_TEXT', got 'TAGEND'
`

const buildMermaidTemplate = (summary: string, type: string) => {

  return `A continuación, se presenta un resumen con subtemas identificados un texto proporcionado. 
  [Resumen General]
  ${summary}
  [Fin del Resumen General]

  [Explicación de sintaxis en la respusta]
  ${mermaidSyntaxExplanation}
  [Fin de la explicación de sintaxis en la respusta]

  [Ejemplos de sintaxis de Mermaid]
  ${mermaidSyntaxExamples}
  [Fin de los ejemplos de sintaxis de Mermaid]

  OBSERVA QUE NO SE DEBE INCLUIR TEXTO EN ESTA SECCIÓN. SI HAY ERRORES EN EL TEXTO PROPORCIONADO, NO LOS INCLUYAS EN LA RESPUESTA.
  INTTENTA NO INCLUIR ERRORES COMUNES EN LA RESPUESTA.
  INTENTA SOLUCIONAR LOS ERRORES COMUNES EN LA RESPUESTA.

  [Errores comunes]
  ${commonErrors}
  [Fin de los errores comunes]

  [DIAGRAMAS PROPORCIONADO]

  Explicación de respuesta: Por favor, utiliza diagramas Mermaid para explicar los subtemas identificados y la relación entre ellos.
  y HASLO EXLUSIVAMENTE EN EL TIPO DE DIAGRAMA PROPORCIONADO EN [DIAGRAMAS PROPORCIONADO]
  ${type}
  [Fin diagrama proporcionado]

  [Guia general del flujo de trabajo]

  SUPER IMPORTANTE: no respondas en markdown, solo en texto plano esto quiere decir que no pondras las tres comillas invertidas ni mermaid, solo el typo de 
  diagrama que vas a utilizar. Recuerda no incluir texto en esta sección. y solo responder con el tipo de diagrama que vas a utilizar, responde en texto plano, no en markdown,
  evita las comillas invertidas y el texto en markdown. solo responde con el tipo de diagrama que vas a utilizar y su contenido.

  1. Identificar subtemas
  2. Analizar relación entre subtemas
  3. Siguiendo la Explicación de respuesta
  4. Identificar puntos clave, que puedan ser explicados plasmados en un diagrama Mermaid.
  5. Crear diagrama Mermaid y HASLO EXLUSIVAMENTE EN TIPO DE DIAGRAMA PROPORCIONADO EN [DIAGRAMAS PROPORCIONADO]
  6. No te salgas del texto proporcionado y utiliza solo la información proporcionada.
  7. Utiliza diagramas Mermaid para explicar los subtemas identificados y la relación entre ellos.


  Muy importtante: no me brindes informacion del texto o algun contexto adicional, solo dame la respuesta sintetizada en un diagrama Mermaid.
  SOLO RESPONDE CON DIAGRAMAS MERMAID, NO TEXTO.
  NO RESPONDAS CON TEXTO, SOLO DIAGRAMAS MERMAID.

  [Fin de la guia general del flujo de trabajo]
  `
}




export const TEMPLATES = {
  SUMMARY: summaryTemplate,
  MERMAID: buildMermaidTemplate,
  //QUESTION: questionTemplate
}
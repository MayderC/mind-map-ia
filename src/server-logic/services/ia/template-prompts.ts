import { MAP_TYPES } from "@/shared/constants"
import { get } from "http"
import { classDiagram, entityRelationship, flowchart, gantt, mindmap, sequence, stateDiagram } from "./template-type.prompts"


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
  UML	[lifelines]:participant	activate, [container: loop, alt, opt	class
  Information	comment: %%	note

[Mermaid syntax]

Styling: Customize the appearance of nodes, links, and text using CSS-like styles. Example: A[Node A] {stroke: #333; fill: #FFF}

`

const mermaidSyntaxExamples = `

-------------------------------------
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

-------------------------------------

flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]


-------------------------------------

erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses

-------------------------------------

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

-------------------------------------
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
-------------------------------------
Prompt Detallado
A continuación, te presento las instrucciones para crear diagramas de tipo mindmap utilizando Mermaid basados en un texto proporcionado. Presta especial atención a la estructura jerárquica de los nodos, asegurándote de que haya solo un nodo raíz y que todos los subtemas estén organizados jerárquicamente como subnodos de dicho nodo raíz. Además, no debe haber más de 10 subtemas directos del nodo raíz.

Instrucciones para la creación de diagramas mindmap en Mermaid:
Diagrama Mermaid: Utiliza el tipo de diagrama mindmap.
Nodo Raíz Único: El diagrama debe tener un único nodo raíz que represente el tema principal del contenido del resumen proporcionado. Este nodo será la única entrada sin tabulación o espacio adicional al comienzo de la línea.
Subtemas: Todos los subtemas del resumen deben estar organizados jerárquicamente como subnodos del nodo raíz. No debe haber subtemas al mismo nivel que el nodo raíz. Cada subtema debe estar indentado con un nivel adicional de tabulación o espacio.
Máximo de Subtemas: El nodo raíz no debe tener más de 10 subtemas directos. Si hay más de 10 subtemas en el resumen, agrúpalos en categorías lógicas para que el número de subtemas directos no exceda de 10.
Estructura de Subcategorías: Si un subtema tiene subcategorías propias, estas también deben estar indentadas adecuadamente, manteniendo la jerarquía clara y lógica.
Incluye pequeñas explicaciones de 10 a 15 palabras solo donde sea muy necesario para clarificar conceptos importantes.
Sintaxis Correcta: Asegúrate de seguir la sintaxis correcta de Mermaid para evitar errores de parseo. Los subnodos deben estar conectados de forma jerárquica al nodo padre.

[Texto Proporcionado]
  ## Resumen de subtemas

### Antecedentes
El texto proporcionado analiza los antecedentes que llevaron a la Primera Guerra Mundial, incluyendo la carrera armamentista, el imperialismo y el colonialismo europeo, y el sistema de alianzas en Europa.

### Imperialismo y colonialismo europeo
El texto destaca la importancia del imperialismo y el colonialismo europeo en la configuración del mundo en vísperas de la Primera Guerra Mundial, y cómo las potencias europeas competían por la dominación de vastos territorios.

### Sistema de alianzas
El texto explica cómo el sistema de alianzas en Europa se fue desmantelando a lo largo del siglo XIX, y cómo las potencias europeas se agruparon en dos bloques principales: la Triple Entente y la Triple Alianza.

### Preludio
El texto describe los eventos que llevaron a la declaración de la guerra, incluyendo el asesinato del archiduque Francisco Fernando de Austria y la crisis de julio.

## Resumen general

La Primera Guerra Mundial fue un conflicto mundial que comenzó en 1914 y terminó en 1918. Fue causada por la carrera armamentista, el imperialismo y el colonialismo europeo, y el sistema de alianzas en Europa. El asesinato del archiduque Francisco Fernando de Austria y la crisis de julio fueron los eventos que llevaron a la declaración de la guerra. La guerra se libró en varios frentes, incluyendo el frente occidental, el frente oriental y el frente italiano. La guerra terminó con la derrota de las Potencias Centrales y la firma del Tratado de Versalles.

mindmap
    PrimeraGuerraMundial(Primera Guerra Mundial)
        antecedentes(Antecedentes)
            carreraArmamentista(Carrera armamentista)
            imperialismoColonialismoEuropeo(Imperialismo y colonialismo europeo)
            sistemaAlianzas(Sistema de alianzas)
        imperialismoColonialismoEuropeo(Imperialismo y colonialismo europeo)
            competicionDominacion(Competencia por la dominación de vastos territorios)
        sistemaAlianzas(Sistema de alianzas)
            tripleEntente(Triple Entente)
            tripleAlianza(Triple Alianza)
        preludio(Preludio)
            asesinatoArchiduque(Asesinato del archiduque Francisco Fernando de Austria)
            crisisJulio(Crisis de julio)

Nota Importante:
Único Nodo Raíz: Solo debe haber un nodo raíz en el diagrama. Los subtemas deben estar organizados en subcategorías lógicas y conectados de manera jerárquica al nodo raíz.
Máximo de Subtemas: No debe haber más de 10 subtemas directos del nodo raíz. Agrupa los subtemas en categorías lógicas si es necesario.
Evitar Subtemas en la Raíz: No puede haber subtemas al mismo nivel que el nodo raíz. Todos los subtemas deben estar debidamente indentados.
Claridad y Consistencia: La información debe presentarse de manera clara y estructurada, siguiendo un flujo lógico de pensamiento. Cada nodo debe tener un padre y, si es necesario, hijos.

[Diagrama Proporcionado]
Explicación de respuesta: Por favor, utiliza diagramas Mermaid para representar la estructura jerárquica del contenido del texto proporcionado,cuando es mindmap asegurate de que solo haya un nodo raíz y que todos los subtemas estén correctamente organizados como subnodos de dicho nodo raíz. Además, no debe haber más de 10 subtemas directos del nodo raíz.



---------------------------------
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
---------------------------------------
mindmap
    Frente occidental
        Frente oriental
        Frente italiano
mindmap
Error: Error: Parse error on line 4:
... Frente italianomindmap
----------------------^
Expecting 'SPACELINE', 'NL', 'EOF', 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID', got 'MINDMAP'
---------------------------------------
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

  [DIAGRAMA PROPORCIONADO]


  ${type}
  [Fin diagrama proporcionado]

  [Guia general del flujo de trabajo]

  SUPER IMPORTANTE: no respondas en markdown, solo en texto plano esto quiere decir que no pondras las tres comillas invertidas ni mermaid, solo el typo de 
  diagrama que vas a utilizar. Recuerda no incluir texto en esta sección. y solo responder con el tipo de diagrama que vas a utilizar, responde en texto plano, no en markdown,
  evita las comillas invertidas y el texto en markdown. solo responde con el tipo de diagrama que vas a utilizar y su contenido.

  NUNCA RESPONDAS CON 2 O MAS TIPOS DE DIAGRAMAS, SOLO RESPONDE CON UN TIPO DE DIAGRAMA.
  Es muy importante que sigas las instrucciones y solo respondas con un tipo de diagrama.
  debes seguir las instrucciones y solo responder con un tipo de diagrama. debidamente identificado.
  esto porque el sistema solo acepta un tipo de diagrama y no puede procesar mas de uno. no uses graph USA MINDMAP
  graph es muy aburrido y mindmap lo puede remplazar, usa minmap en su lugar. recuerda solo responder con un tipo de diagrama.
  y usa mindmap en lugar de graph, graph es muy genérico y mindmap es mas especifico. solo responde con un tipo de diagrama.


  1. Identificar subtemas 
  2. Analizar relación entre subtemas
  3. Siguiendo la Explicación de respuesta
  4. Identificar puntos clave, que puedan ser explicados plasmados en un diagrama Mermaid.
  5. Crear diagrama Mermaid y HASLO EXLUSIVAMENTE EN TIPO DE DIAGRAMA PROPORCIONADO EN [DIAGRAMAS PROPORCIONADO] y Solo responde con un tipo de diagrama. NO RESPONDAS CON 2 O MAS TIPOS DE DIAGRAMAS.
  6. No te salgas del texto proporcionado y utiliza solo la información proporcionada.
  7. Utiliza diagramas Mermaid para explicar los subtemas identificados y la relación entre ellos.
  8. EVITA LOS [ERRORES COMUNES]


  Muy importante: no me brindes informacion del texto o algun contexto adicional, solo dame la respuesta sintetizada en un diagrama Mermaid.
  SOLO RESPONDE CON DIAGRAMAS MERMAID, NO TEXTO.
  NO RESPONDAS CON TEXTO, SOLO DIAGRAMAS MERMAID.

  [Fin de la guia general del flujo de trabajo]
  `
}
export const getDiagramExplanation = (type: MAP_TYPES) => {

  console.log("Type:", type, type.toUpperCase()); // Verifica el valor de type
  console.log("MAP_TYPES:", MAP_TYPES); // Verifica los valores de MAP_TYPES
  console.log("flowchart:", flowchart); // Verifica que flowchart esté definido
  console.log("gantt:", gantt); // Verifica que gantt esté definido
  console.log("classDiagram:", classDiagram); // Verifica que classDiagram esté definido
  console.log("stateDiagram:", stateDiagram); // Verifica que stateDiagram esté definido
  console.log("sequence:", sequence); // Verifica que sequence esté definido
  console.log("entityRelationship:", entityRelationship); // Verifica que entityRelationship esté definido
  console.log("mindmap:", mindmap); //

  return {
    [MAP_TYPES.FLOWCHART]: flowchart,
    [MAP_TYPES.GANTT]: gantt,
    [MAP_TYPES.CLASS]: classDiagram,
    [MAP_TYPES.STATE]: stateDiagram,
    [MAP_TYPES.SEQUENCE]: sequence,
    [MAP_TYPES.ENTITY]: entityRelationship,
    [MAP_TYPES.MINDMAP]: mindmap
  }[type]
}


const mermaidv2Template = (summary: string, type: MAP_TYPES) => {
  return `
  A continuación, se presenta un resumen con subtemas identificados a partir de un texto proporcionado.
  [Resumen General]
  ${summary}
  [Fin del Resumen General]

  [Instrucciones Generales para el Diagrama]
  - Genera un diagrama en formato Mermaid.
  - Asegúrate de seguir las reglas específicas para el tipo de diagrama proporcionado.
  - Asegúrate de que el diagrama tenga solo un nodo raíz.

  NUNCA RESPONDAS CON 2 O MAS TIPOS DE DIAGRAMAS, SOLO RESPONDE CON UN TIPO DE DIAGRAMA.
  Es muy importante que sigas las instrucciones y solo respondas con un tipo de diagrama.
  debes seguir las instrucciones y solo responder con un tipo de diagrama. debidamente identificado.
  esto porque el sistema solo acepta un tipo de diagrama y no puede procesar mas de uno. no uses graph USA MINDMAP
  graph es muy aburrido y mindmap lo puede remplazar, usa minmap en su lugar. recuerda solo responder con un tipo de diagrama.
  y usa mindmap en lugar de graph, graph es muy genérico y mindmap es mas especifico. solo responde con un tipo de diagrama.

  [Explicación de sintaxis geneal de mermaid]
  ${mermaidSyntaxExplanation}
  [Fin de la explicación]

  [Tipo de Diagrama Proporcionado]
  ${type}
  la respuesta solo debe ser basada en este tipo de diagrama. solo responde con un tipo de diagrama. y que sea el tipo de diagrama proporcionado.
  [Fin del Tipo de Diagrama Proporcionado]

  [Explicación de diagrama proporcionado]
  ${getDiagramExplanation(type)}
  [Fin de la explicación de diagrama proporcionado]


  [Explicación de Respuesta]
  NUNCA RESPONDAS CON 2 O MAS TIPOS DE DIAGRAMAS, SOLO RESPONDE CON UN TIPO DE DIAGRAMA.

  Por favor, utiliza la sintaxis de Mermaid para generar el diagrama del tipo especificado siguiendo las instrucciones proporcionadas. Asegúrate de mantener la estructura adecuada y de incluir pequeñas explicaciones solo donde sea muy necesario. Genera únicamente el tipo de diagrama especificado en [Tipo de Diagrama Proporcionado].

  Muy importante: no me brindes informacion del texto o algun contexto adicional, solo dame la respuesta sintetizada en un diagrama Mermaid.
  SOLO RESPONDE CON DIAGRAMAS MERMAID, NO TEXTO.
  NO RESPONDAS CON TEXTO, SOLO DIAGRAMAS MERMAID.

  no uses graph USA MINDMAP
  graph es muy aburrido y mindmap lo puede remplazar, usa minmap en su lugar. recuerda solo responder con un tipo de diagrama.
  y usa mindmap en lugar de graph, graph es muy genérico y mindmap es mas especifico. solo responde con un tipo de diagrama.

  [Fin de la Explicación de Respuesta]
  `
}



export const TEMPLATES = {
  SUMMARY: summaryTemplate,
  MERMAID: mermaidv2Template,
  //QUESTION: questionTemplate
}
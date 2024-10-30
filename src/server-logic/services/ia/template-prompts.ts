import { MAP_TYPES } from "@/shared/constants"
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

export const getDiagramExplanation = (type: MAP_TYPES) => {
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

const getDiagramType = (text: string) => {
  return`
    Explicación:
    Solo respondeme con una palabra y esa palabra sera el que determines que tiene mas sentido con el contexto del texto proporcionado.
    [Texto proporcionado]
    ${text}
    [Fin del texto proporcionado]
   ['FLOWCHART', 'SEQUENCE', 'CLASS', 'STATE', 'ENTITY', 'MINDMAP']
`
}



const mermaidNoContext = (question: string, type: MAP_TYPES) => {
  return `
  Genera un diagrama explicativo y detallado sobre la siguiente pregunta, toda la informacion que tengas para brindar, 
  generala en formato de diagrama mermaid.
  [pregunta]
  ${question}
  [pregunta]

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

  Si es mindmap, puedes generar textos cortos y explicativos para diversos subtemas. no uses quiones bajos.

  [Fin de la Explicación de Respuesta]
  `
}

export const TEMPLATES = {
  SUMMARY: summaryTemplate,
  MERMAID: mermaidv2Template,
  MERMAID_NO_CONTEXT: mermaidNoContext,
  EXCLIDRAW_TYPE: getDiagramType
}
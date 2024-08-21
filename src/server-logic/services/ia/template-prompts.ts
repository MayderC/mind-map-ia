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

const excalidrawPromp = (text: string) => {
  return`
    Explicación:
    shapeSchema: Es el esquema principal que describe un elemento de la lista. Tiene propiedades opcionales y requeridas, dependiendo del tipo de elemento.
    roundnessSchema: Define el objeto roundness.
    boundElementSchema: Define los elementos vinculados, que pueden ser de tipo arrow, text, o line.
    pointSchema: Es una tupla que define un punto en el espacio (x, y).
    bindingSchema: Define el objeto startBinding y endBinding, que contienen información de conexión entre elementos.

    "Por favor, genera un array de objetos que representen formas de Excalidraw. El array debe incluir varias formas como rectángulos, elipses, diamantes y texto. Además, incluye flechas y líneas que conecten estas formas. Asegúrate de que las posiciones de las formas y las direcciones de las flechas/líneas tengan sentido lógico, con flechas apuntando de una forma a otra o conectando formas relacionadas. Los objetos deben incluir las propiedades necesarias como x, y, width, height, angle, points, strokeColor, backgroundColor, fillStyle, y otras relevantes para cada forma. Asegúrate de que las flechas y las líneas conecten correctamente las formas por sus puntos lógicos."

    Creame el diagrama segun el texto proporcionado., puede ser un diagrama de flujo, un diagrama de clases, un diagrama de secuencia, un diagrama de estados, un diagrama de entidad-relacion, un diagrama de gantt o un mapa mental.
    sobre [Texto proporcionado] tranformalo en un diagrama de flujo, un diagrama de clases, un diagrama de secuencia, un diagrama de estados, un diagrama de entidad-relacion, un diagrama de gantt o un mapa mental.

    generema un maximo de 3 elementos, no mas de 3 elementos.

    [Texto proporcionado]
    ${text}
    [Fin del texto proporcionado]

  [ElementType]
  "selection",
  "rectangle",
  "diamond",
  "ellipse",
  "arrow",
  "bar",
  "circle",
  "triangle",
  "diamond",
  [Fin del ElementType]`
}

export const TEMPLATES = {
  SUMMARY: summaryTemplate,
  MERMAID: mermaidv2Template,
  EXCLIDRAW: excalidrawPromp
}
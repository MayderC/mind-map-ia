

const summaryTemplate = (text: string) => {

return `
  [Texto proporcionado]

  ${text}

  [Fin del texto proporcionado]

  Preguntas de consulta: sobre el [Texto proporcionado] anteriormente, responde a las siguientes preguntas:

  1.Resumen de subtemas: Por favor, identifica los subtemas principales en el texto proporcionado. Resumen cada subtema de manera concisa (aproximadamente 1-2 oraciones).

  2. Resumen general: Resumen el texto proporcionado de manera breve y precisa (aproximadamente 5-7 oraciones).
  3. Explicación por IA: Por favor, proporciona una explicación breve y clara de cada subtema identificado, utilizando lenguaje sencillo y accesible para estudiantes. Asegúrate de que la explicación esté basada únicamente en el texto proporcionado y no incluya información adicional. 

  Especificaciones adicionales: Por favor, utiliza un lenguaje claro y conciso en el resumen y la explicación. Asegúrate de que el resumen y la explicación estén libres de errores gramaticales y de estilo. Si es posible, proporciona ejemplos o ilustraciones(No images ni URLS) para ayudar a los estudiantes a entender mejor los conceptos. 

  Formato de respuesta: Por favor, responde en formato markdown, utilizando títulos y listas para organizar la información de manera clara y estructurada. Asegúrate de que la respuesta sea coherente y fácil de leer para los estudiantes.

  Muy importante: Por favor, asegúrate responder en el idioma del texto proporcionado. Aunque las instrucciones esten otro idioma, la respuesta debe ser en el idioma del texto proporcionado.
import { question } from '@/server-logic/services/ia/llama3.service';

  Nota:Asegúrate de que el texto proporcionado sea claro y conciso, y que no contenga información adicional que pueda confundir a los estudiantes.`

}
const mermaidSyntaxExplanation = `


`


const buildMermaidTemplate = (summary: string) => {

  return `A continuación, se presenta un resumen con subtemas identificados un texto proporcionado. 
  [Resumen General]
  ${summary}
  [Fin del Resumen General]

  [Explicación de respuesta]
  ${mermaidSyntaxExplanation}
  [Fin de la explicación de respuesta]

  [Guia general del flujo de trabajo]

  1. Identificar subtemas
  2. Analizar relación entre subtemas
  3. Siguiendo la Explicación de respuesta
  4. Identificar puntos clave, que puedan ser explicados plasmados en un diagrama Mermaid.
  5. Crear diagrama Mermaid
  6. No te salgas del texto proporcionado y utiliza solo la información proporcionada.
  7. Utiliza diagramas Mermaid para explicar los subtemas identificados y la relación entre ellos.
  8. Utiliza la Explicación de respuesta para explicar los subtemas identificados.

  [Fin de la guia general del flujo de trabajo]

  `
}




export const TEMPLATES = {
  SUMMARY: summaryTemplate,
  MERMAID: buildMermaidTemplate,
  //QUESTION: questionTemplate
}
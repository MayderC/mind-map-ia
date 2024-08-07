export const flowchart = `
[Instrucciones Específicas para Flowchart]
- Utiliza la sintaxis de Mermaid para flowchart.
- Asegúrate de representar el flujo de manera clara y coherente.
- Usa nodos y flechas para indicar el flujo de procesos.

Ejemplo de sintaxis de Mermaid para flowchart:
flowchart TD
  A[Start] --> B{Is it?}
  B -->|Yes| C[Do something]
  B -->|No| D[Do something else]
  C --> E[End]

[Fin de las Instrucciones Específicas para Flowchart]
`

export const sequence = `
[Instrucciones Específicas para Sequence]
- Utiliza la sintaxis de Mermaid para sequence diagrams.
- Asegúrate de representar la secuencia de mensajes entre participantes.
- Usa flechas para indicar la dirección de los mensajes.

Ejemplo de sintaxis de Mermaid para sequence:
sequenceDiagram
  participant Alice
  participant Bob
  Alice->>Bob: Hello Bob, how are you?
  Bob-->>Alice: I am good thanks!

[Fin de las Instrucciones Específicas para Sequence]
`

export const gantt = `
[Instrucciones Específicas para Gantt]
- Utiliza la sintaxis de Mermaid para Gantt charts.
- Asegúrate de representar las tareas y sus fechas de inicio y fin.
- Usa secciones y tareas para organizar el diagrama.

Ejemplo de sintaxis de Mermaid para Gantt:
gantt
  dateFormat  YYYY-MM-DD
  title Adding GANTT diagram to mermaid
  section A section
  Completed task           :done,    des1, 2014-01-06,2014-01-08
  Active task              :active,  des2, 2014-01-09, 3d

[Fin de las Instrucciones Específicas para Gantt]
`

export const classDiagram = `
[Instrucciones Específicas para Class]
- Utiliza la sintaxis de Mermaid para class diagrams.
- Asegúrate de representar las clases y sus relaciones.
- Usa atributos y métodos dentro de las clases.

Ejemplo de sintaxis de Mermaid para class:
classDiagram
  class Animal {
    +String name
    +int age
    +void makeSound()
  }

[Fin de las Instrucciones Específicas para Class]

`

export const stateDiagram = `
[Instrucciones Específicas para State]
- Utiliza la sintaxis de Mermaid para state diagrams.
- Asegúrate de representar los estados y sus transiciones.
- Usa flechas para indicar las transiciones entre estados.

Ejemplo de sintaxis de Mermaid para state:
stateDiagram-v2
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]

[Fin de las Instrucciones Específicas para State]
`

export const entityRelationship = `
[Instrucciones Específicas para Entity]
- Utiliza la sintaxis de Mermaid para entity relationship diagrams.
- Asegúrate de representar las entidades y sus relaciones.
- Usa diferentes tipos de relaciones (uno a muchos, muchos a muchos).

Ejemplo de sintaxis de Mermaid para entity:
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses

[Fin de las Instrucciones Específicas para Entity]
`

export const  mindmap = `
[Ejemplo de Sintaxis de Mermaid para Mindmap]
mindmap
  root(mindmap)
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
[Fin de las Instrucciones Específicas para Mindmap]


[Instrucciones Específicas para Mindmap]
Diagrama Mermaid: Utiliza el tipo de diagrama mindmap.
Nodo Raíz Único: El diagrama debe tener un único nodo raíz que represente el tema principal del contenido del resumen proporcionado. Este nodo será la única entrada sin tabulación o espacio adicional al comienzo de la línea.
Subtemas: Todos los subtemas del resumen deben estar organizados jerárquicamente como subnodos del nodo raíz. No debe haber subtemas al mismo nivel que el nodo raíz. Cada subtema debe estar indentado con un nivel adicional de tabulación o espacio.
Máximo de Subtemas: El nodo raíz no debe tener más de 10 subtemas directos. Si hay más de 10 subtemas en el resumen, agrúpalos en categorías lógicas para que el número de subtemas directos no exceda de 10.
Estructura de Subcategorías: Si un subtema tiene subcategorías propias, estas también deben estar indentadas adecuadamente, manteniendo la jerarquía clara y lógica.
Incluye pequeñas explicaciones de 10 a 15 palabras solo donde sea muy necesario para clarificar conceptos importantes.
Sintaxis Correcta: Asegúrate de seguir la sintaxis correcta de Mermaid para evitar errores de parseo. Los subnodos deben estar conectados de forma jerárquica al nodo padre.



Nota Importante:
Único Nodo Raíz: Solo debe haber un nodo raíz en el diagrama. Los subtemas deben estar organizados en subcategorías lógicas y conectados de manera jerárquica al nodo raíz.
Máximo de Subtemas: No debe haber más de 10 subtemas directos del nodo raíz. Agrupa los subtemas en categorías lógicas si es necesario.
Evitar Subtemas en la Raíz: No puede haber subtemas al mismo nivel que el nodo raíz. Todos los subtemas deben estar debidamente indentados.
Claridad y Consistencia: La información debe presentarse de manera clara y estructurada, siguiendo un flujo lógico de pensamiento. Cada nodo debe tener un padre y, si es necesario, hijos.

[Diagrama Proporcionado]
Explicación de respuesta: Por favor, utiliza diagramas Mermaid para representar la estructura jerárquica del contenido del texto proporcionado,cuando es mindmap asegurate de que solo haya un nodo raíz y que todos los subtemas estén correctamente organizados como subnodos de dicho nodo raíz. Además, no debe haber más de 10 subtemas directos del nodo raíz.

Has todo lo posible para que el diagrama solo tenga un nodo raíz, se identifique claramente y se conecte de manera jerárquica con los subtemas. Si es necesario, agrupa los subtemas en categorías lógicas para mantener la claridad y la coherencia del diagrama.

El nodo raiz debe tener solo una tabulación o espacio al inicio de la línea, los subtemas deben tener una tabulación adicional para indicar su jerarquía. Asegúrate de seguir la sintaxis correcta de Mermaid para evitar errores de parseo.

a todo esto para evitar errores de parseo. agrega siempre un espacio extra antes de cada subtema para mantener la jerarquía clara y lógica.

es decir al nodo solo le das un espacio y a los subtemas dos espacios. o haces una tabulación y dos tabulaciones respectivamente.
pero siempre un espacio extra antes de cada subtema para evitar errores de parseo.

el nodo raiz es el primer nodo que se coloca en el diagrama y debe tener solo un espacio al inicio de la línea. los subtemas deben tener dos espacios al inicio de la línea para indicar su jerarquía. pero siempre un espacio extra antes de cada subtema para evitar errores de parseo.

[Fin de las Instrucciones Específicas para Mindmap]
`
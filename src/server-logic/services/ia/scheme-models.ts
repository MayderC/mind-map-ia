import {z} from 'zod'


export const shemeDiagramType = z.object({
  type: z.enum(['FLOWCHART', 'SEQUENCE', 'CLASS', 'STATE', 'ENTITY', 'MINDMAP'])
})
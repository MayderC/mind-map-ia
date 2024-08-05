
export interface IMap {
  _id?: string;
  title: string;
  description?: string;
  type: string;
  mermaidSyntax?: string;
  gojsStructure?: any
}

export interface CreateMap extends IMap {
  content? : string;
}
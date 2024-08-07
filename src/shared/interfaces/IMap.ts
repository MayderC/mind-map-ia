import { MAP_TYPES } from "../constants";

export interface IMap {
  _id?: string;
  title: string;
  description?: string;
  type: MAP_TYPES;
  mermaidSyntax?: string;
  gojsStructure?: any
}

export interface CreateMap extends IMap {
  content? : string;
}
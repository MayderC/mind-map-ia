import { IMap } from './IMap';

export interface ISummary {
  _id?: string;
  title: string;
  description: string;
  content: string;
  maps?: IMap[];
}
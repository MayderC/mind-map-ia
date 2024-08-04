import { IMap } from './IMap';
import { decodeJwt } from 'jose';

export interface ISummary {
  _id?: string;
  title: string;
  description: string;
  content: string;
  maps?: IMap[];
  date?: Date;
  words?: number;
}
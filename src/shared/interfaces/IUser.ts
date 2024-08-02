import { ISummary } from './ISummary';
import {ROLES} from "@/shared/constants";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  role?: ROLES[];
  summaries?: ISummary[];
  password: string;
}
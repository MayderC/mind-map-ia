import { IMap } from "@/shared/interfaces/IMap";

export interface LoginProps {
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string[];
  summaries: string[];
  token: string;
}

export interface UserContextType {
  user: LoginProps | null;
  login: (user: LoginProps) => void;
  logout: () => void;
}

export interface MerMaidMapContextType {
  map: IMap | null;
  setMap: (map: IMap) => void;
  removeMap: () => void;
}
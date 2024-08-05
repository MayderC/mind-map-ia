import { useContext } from "react";
import { MermaidMapContext } from "../context/mermaidMapContext";
import { MerMaidMapContextType } from "../interfaces";

export function useMermaidMap() {
  return useContext<MerMaidMapContextType | null>(MermaidMapContext);
}
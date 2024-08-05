import { useContext } from "react";
import { MermaidMapContext } from "../context/mermaidMapContext";

export function useMermaidMap() {
  return useContext(MermaidMapContext);
}
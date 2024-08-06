import { useContext } from "react";
import { ToolContext } from "../context/toolContext";

export function useTool() {
  return useContext<{show: boolean, toggle: Function} | null>(ToolContext);
}

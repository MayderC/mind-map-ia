import { useContext } from "react";
import { UserContext } from "@/presentation-ui/context/userContext";
import { UserContextType } from "@/presentation-ui/interfaces/index";



export const useUser = () => {
  const context = useContext(UserContext) as UserContextType;
  if (!context) throw new Error("useUser must be used within an UserProvider");
  return context;
};
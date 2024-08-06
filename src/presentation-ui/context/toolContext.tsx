'use client'
import React, { createContext, useState } from 'react';
export const ToolContext = createContext<{show: boolean, toggle: Function} | null>(null)


export function ToolProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <ToolContext.Provider value={{ show, toggle }}>
      {children}
    </ToolContext.Provider>
  );
}



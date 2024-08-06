'use client'
import React, { createContext, useState } from 'react';
export const ToolContext = createContext<{show: boolean, toggle: Function, set: Function} | null>(null)


export function ToolProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(true);

  const toggle = () => {
    setShow(!show);
  };

  const set = (value: boolean) => {
    setShow(value);
  }

  return (
    <ToolContext.Provider value={{ show, toggle, set }}>
      {children}
    </ToolContext.Provider>
  );
}



'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { MerMaidMapContextType } from '../interfaces';
import { IMap } from '@/shared/interfaces/IMap';

export const MermaidMapContext = createContext<MerMaidMapContextType | null>(null);
export const LOCAL_STORAGE_KEY = 'currentMap';

export function MermaidMapProvider({ children }: { children: React.ReactNode }) {
  const [mermaidMap, setMermaidMap] = useState<IMap | null>(null);

  useEffect(() => {
    const mermaidMap = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (mermaidMap) setMermaidMap(mermaidMap);
  }, []);

  const setMap = (map: IMap) => {
    setMermaidMap(map);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map));
  };

  const removeMap = () => {
    setMermaidMap(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <MermaidMapContext.Provider value={{ map: mermaidMap, setMap, removeMap }}>
      {children}
    </MermaidMapContext.Provider>
  );
}


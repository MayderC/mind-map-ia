'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { MerMaidMapContextType } from '../interfaces';
import { IMap } from '@/shared/interfaces/IMap';

export const MermaidMapContext = createContext<MerMaidMapContextType | null>(null);
export const LOCAL_STORAGE_KEY = 'currentMap';

export function MermaidMapProvider({ children }: { children: React.ReactNode }) {
  const [mermaidMap, setMermaidMap] = useState<IMap | null>(null);
  const [mermaid4Excalidraw, setMermaid4Excalidraw] = useState<string>('');


  const handleMermaid4Excalidraw = (mermaid: string) => {
    setMermaid4Excalidraw(mermaid);
  }

  const resetMermaid4Excalidraw = () => {
    setMermaid4Excalidraw('');
  }

  const setMap = (map: IMap) => {
    setMermaidMap(map);
  };

  const removeMap = () => {
    setMermaidMap(null);
  };

  return (
    <MermaidMapContext.Provider value={{ map: mermaidMap, setMap, removeMap, resetMermaid4Excalidraw, handleMermaid4Excalidraw, mermaid4Excalidraw }}>
      {children}
    </MermaidMapContext.Provider>
  );
}


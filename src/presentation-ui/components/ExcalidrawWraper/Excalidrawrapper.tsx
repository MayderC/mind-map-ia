"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
// import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
// import { convertToExcalidrawElements}  from "@excalidraw/excalidraw"
// import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";
// import { graphToExcalidraw } from "@excalidraw/mermaid-to-excalidraw/dist/graphToExcalidraw";
// import { useState, useEffect } from 'react'
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";

//import { ButtonStar } from "../Button/ButtonStar/ButtonStar";
type ExcaliDrawWrapperState = { elements?: ExcalidrawElement[], appState?: AppState }
const ExcalidrawWrapper: React.FC = () => {

  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);


  const handleSave = async() => {    

  };
  
  const updateScene = () => {
    if(!excalidrawAPI)return
    excalidrawAPI.updateScene({
      elements: [
        {
          type: "rectangle",
          version: 141,
          versionNonce: 361174001,
          isDeleted: false,
          id: "oDVXG8D6Dpl",
          fillStyle: "hachure",
          strokeWidth: 1,
          strokeStyle: "solid",
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 200.75,
          y: 100.5,
          strokeColor: "#000000",
          backgroundColor: "transparent",
          width: 200,
          height: 100,
          seed: 1968410350,
          groupIds: [],
          roundness: {
            type: 3,
            value: 32,
          },
          frameId: null, // or the appropriate frameId if applicable
          boundElements: [], // Array of bound elements
          updated: Date.now(), // Current timestamp or a specific updated timestamp
          link: null, // or an appropriate link object if applicable
          locked: false, 
        },
      ],
    });
  }


  return (
    <Excalidraw 
          theme="dark"
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          UIOptions={{ canvasActions: { saveAsImage: true } }}
          renderTopRightUI={() => <button onClick={updateScene}>Save</button>}
        >
          <MainMenu>
            <MainMenu.ItemLink href="https://google.com">
              Google
            </MainMenu.ItemLink>
            <MainMenu.ItemLink href="https://excalidraw.com">
              Excalidraw
            </MainMenu.ItemLink>
          </MainMenu>

          <WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo />
              <WelcomeScreen.Center.Heading>
                Excalidraw power by IA
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
                <WelcomeScreen.Center.MenuItemLink href="https://github.com/excalidraw/excalidraw">
                  Excalidraw GitHub
                </WelcomeScreen.Center.MenuItemLink>
                <WelcomeScreen.Center.MenuItemLink href="https://github.com/excalidraw/excalidraw">
                  MayderC GitHub
                </WelcomeScreen.Center.MenuItemLink>
                <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center.Menu>
            </WelcomeScreen.Center>
        </WelcomeScreen>

        </Excalidraw>
  );
};
export default ExcalidrawWrapper;
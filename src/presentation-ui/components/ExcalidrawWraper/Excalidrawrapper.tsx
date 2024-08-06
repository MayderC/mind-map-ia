"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
// import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
// import { convertToExcalidrawElements}  from "@excalidraw/excalidraw"
// import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";
// import { graphToExcalidraw } from "@excalidraw/mermaid-to-excalidraw/dist/graphToExcalidraw";
// import { useState, useEffect } from 'react'
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState } from "@excalidraw/excalidraw/types/types";

//import { ButtonStar } from "../Button/ButtonStar/ButtonStar";
type ExcaliDrawWrapperState = { elements?: ExcalidrawElement[], appState?: AppState }
const ExcalidrawWrapper: React.FC = () => {


  return (
    <Excalidraw 
          theme="dark"
          //excalidrawAPI={(api) => setExcalidrawAPI(api)}
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
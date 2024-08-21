"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {  ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";
import { useUser } from "@/presentation-ui/hooks/useUser";
import { convertToExcalidrawElements}  from "@excalidraw/excalidraw"
import { parseMermaid } from "@excalidraw/mermaid-to-excalidraw/dist/parseMermaid"
import { graphToExcalidraw } from "@excalidraw/mermaid-to-excalidraw/dist/graphToExcalidraw";
import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
import { mermaidEval } from "@/presentation-ui/helpers/handle-files/mermaid";

const ExcalidrawWrapper: React.FC = () => {
  const userCtx = useUser()
  const merCtx = useMermaidMap()

  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
  const [elements, setElements] = useState<ExcalidrawElement[]>([])


  useEffect(()=>{
    console.log("TEXT AUTUALIZADO")
    mermaidHandle()
  }, [merCtx?.mermaid4Excalidraw])


  const mermaidHandle = async() => {
    try {
      if (!excalidrawAPI)return

      const mermaid4Excalidraw = merCtx?.mermaid4Excalidraw
      if(!mermaid4Excalidraw)return excalidrawAPI.resetScene();

      const mermaidObject = await parseMermaid(mermaidEval(mermaid4Excalidraw));
      if (!mermaidObject)return excalidrawAPI.resetScene();
      

      const { elements, files } = graphToExcalidraw(mermaidObject, {fontSize: 20,});

      excalidrawAPI.updateScene({
        elements: convertToExcalidrawElements(elements),
      });

      if (files) {
        excalidrawAPI.addFiles(Object.values(files));
      }

      excalidrawAPI.scrollToContent(excalidrawAPI.getSceneElements(), {
        fitToContent: true,
      });

    } catch (e) {
      if (!excalidrawAPI)return
      console.log("TEXT AUTUALIZADO ERRRORR")
      excalidrawAPI.resetScene();
    }
  }


  const onChange = () => {
    const sceneElements = excalidrawAPI?.getSceneElements()
    setElements(sceneElements as ExcalidrawElement[])
  }

  return (
    <Excalidraw 
          theme="dark"
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          UIOptions={{ canvasActions: { saveAsImage: true } }}
          onChange={onChange}
          renderTopRightUI={() => <button onClick={mermaidHandle}>Save</button>}
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
                <WelcomeScreen.Center.MenuItemLink href="https://github.com/MayderC">
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
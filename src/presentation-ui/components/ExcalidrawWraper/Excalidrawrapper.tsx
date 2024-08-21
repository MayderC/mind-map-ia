"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {  ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";
import { useUser } from "@/presentation-ui/hooks/useUser";
import { createExcalidrawMap } from "@/presentation-ui/services/maps.service";

const ExcalidrawWrapper: React.FC = () => {
  const userCtx = useUser()
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
  const [firstState, setFirsState] = useState<boolean>(false)
  const [elements, setElements] = useState<ExcalidrawElement[]>([
    {
      type: "rectangle",
      version: 141,
      versionNonce: 361174001,
      isDeleted: false,
      id: "oDVXy8D6rom3H1-LLH2-f",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#c92a2a",
      backgroundColor: "transparent",
      width: 186.47265625,
      height: 141.9765625,
      seed: 1968410350,
      groupIds: [],
      boundElements: null,
      locked: false,
      link: null,
      updated: 1,
      frameId: null,
      roundness: {
        type: 3,
        value: 32,
      },
    },
  ])




  const updateScene = async() => {
    if(!excalidrawAPI)return
    setFirsState(true)
    excalidrawAPI.updateScene({
      elements: elements
    });

    if(!userCtx?.user?.user?._id)return
    const res = await createExcalidrawMap(userCtx?.user?.user._id, 'ciclo del desarrollo de software')
    console.log(res.data.data)
    excalidrawAPI.updateScene({
      elements: res.data.data ? res.data.data : []
    });
  }

  const onChange = () => {
    if(!firstState)return
    const sceneElements = excalidrawAPI?.getSceneElements()
    setElements(sceneElements as ExcalidrawElement[])
  }

  return (
    <Excalidraw 
          theme="dark"
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          UIOptions={{ canvasActions: { saveAsImage: true } }}
          onChange={onChange}
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
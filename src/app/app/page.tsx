'use client'
import { ButtonStar } from "@/components/ButtonStar/ButtonStar";
import { MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import React, { Suspense, lazy } from 'react';




const Excalidraw = lazy(
  () => import('@excalidraw/excalidraw').then((module) => ({
    default: module.Excalidraw,
  }))
);  

export default function App(){



  const fallbackLoader = () => (
    <div className="h-screen w-full flex justify-center items-center">
      <p className="text-[#e3e3e8]">Loading App...</p>
    </div>
  )

  const handleSelect = () => {
    console.log("Hola")
  }

  return (
    <main className="min-h-screen h-screen w-full">
      <Suspense fallback={fallbackLoader()}>
        <Excalidraw
          theme="dark"
          renderTopRightUI={(isMobile, appState) => (
            <ButtonStar onSelect={handleSelect} text="IA tool" isMobile={isMobile} appState={appState} />
          )}
        >
          <MainMenu>
            <MainMenu.ItemLink href="https://google.com">
              Google
            </MainMenu.ItemLink>
            <MainMenu.ItemLink href="https://excalidraw.com">
              Excalidraw
            </MainMenu.ItemLink>
            <MainMenu.Item onSelect={()=> console.log("Holaaa")}>
              Hola
            </MainMenu.Item>
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
      </Suspense>
    </main>
  );
}

"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

//import { ButtonStar } from "../Button/ButtonStar/ButtonStar";

const ExcalidrawWrapper: React.FC = () => {

  // const handleSelect = () => {
  //   console.log('Hola');
  // };

  return (
    <Excalidraw
          theme="dark"
          // renderTopRightUI={(isMobile, appState) => (
          //   <ButtonStar onSelect={handleSelect} text="IA tool" isMobile={isMobile} appState={appState} />
          // )}
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
  );
};
export default ExcalidrawWrapper;
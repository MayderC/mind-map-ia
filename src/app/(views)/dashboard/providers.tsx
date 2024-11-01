"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { UserProvider } from "@/presentation-ui/context/userContext";
import { MermaidMapProvider } from "@/presentation-ui/context/mermaidMapContext";
import { ToolProvider } from "@/presentation-ui/context/toolContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <UserProvider>
      <MermaidMapProvider>
        <ToolProvider>
          <NextUIProvider>
            <NextThemesProvider
              defaultTheme='system'
              attribute='class'
              {...themeProps}>
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </ToolProvider>
      </MermaidMapProvider>
    </UserProvider>
  );
}

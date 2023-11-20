"use client";

import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function NextUIThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      {children}
      {/* <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider> */}
    </NextUIProvider>
  );
}

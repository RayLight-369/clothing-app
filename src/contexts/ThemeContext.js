"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeContext ( { children, ...props } ) {
  return <NextThemesProvider { ...props }>{ children }</NextThemesProvider>;
};

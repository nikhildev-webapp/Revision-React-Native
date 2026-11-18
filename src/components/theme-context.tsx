import { createContext, useContext, useMemo, useState, type PropsWithChildren } from "react";

export type ThemeMode = "black" | "dark";

export const palettes = {
  black: {
    background: "#08090D",
    surface: "#111319",
    elevated: "#191C24",
    text: "#F5F6F8",
    muted: "#9299A8",
    line: "#292D37",
    accent: "#C4F36A",
    danger: "#F27777",
  },
  dark: {
    background: "#141722",
    surface: "#1D2230",
    elevated: "#282E3E",
    text: "#F5F6F8",
    muted: "#A5ADBD",
    line: "#353C4D",
    accent: "#C4F36A",
    danger: "#F58A8A",
  },
};

type AppTheme = {
  themeMode: ThemeMode;
  colors: (typeof palettes)[ThemeMode];
  toggleTheme: () => void;
};

const ThemeContext = createContext<AppTheme | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("black");
  const value = useMemo<AppTheme>(
    () => ({
      themeMode,
      colors: palettes[themeMode],
      toggleTheme: () =>
        setThemeMode((current) => (current === "black" ? "dark" : "black")),
    }),
    [themeMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }
  return theme;
}

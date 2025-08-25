import { ColorScheme, darkTheme, lightTheme, Theme } from "@global/styles/theme";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme, StatusBar, View } from "react-native";

type ThemeContextValue = {
  theme: Theme;
  scheme: ColorScheme;
  userPreference?: ColorScheme;
  setPreference: (scheme?: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const AppThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const system = useColorScheme();
  const [userPreference, setUserPreference] = useState<ColorScheme | undefined>(undefined);

  const scheme: ColorScheme = userPreference ?? (system === "dark" ? "dark" : "light");
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  const value = useMemo(
    () => ({
      theme,
      scheme,
      userPreference,
      setPreference: (s?: ColorScheme) => setUserPreference(s),
    }),
    [scheme, userPreference]
  );

  return (
    <ThemeContext.Provider value={value}>
      <StatusBar
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />

      <View style={{ flex: 1 }}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within AppThemeProvider");
  return ctx;
};

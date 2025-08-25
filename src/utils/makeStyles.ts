import { useMemo } from "react";
import { useTheme } from "@hooks/theme";
import { Theme } from "@global/styles/theme";
import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from "react-native";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type StylesFactory<T extends NamedStyles<T> | NamedStyles<any>> = (t: Theme) => T;

export function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(factory: StylesFactory<T>) {
  return function useStyles() {
    const { theme } = useTheme();
    return useMemo(() => StyleSheet.create(factory(theme)), [theme, factory]);
  };
}

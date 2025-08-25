import { TextStyle } from "react-native";

export type ColorScheme = "light" | "dark";

export type Theme = {
  scheme: ColorScheme;
  colors: {
    background: string;
    surface: string;
    text: string;
    textParagraph: string;
    mutedText: string;
    primary: string;
    divider: string;
    primaryTextOn: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
    placeholder: string;
  };
  spacing: (multiplier?: number) => number; // ex.: s(2) => 16
  radius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    pill: number;
  };
  typography: {
    h1: TextStyle;
    h2: TextStyle;
    h3: TextStyle;
    h4: TextStyle;
    h5: TextStyle;
    h6: TextStyle;
    large: TextStyle;
    medium: TextStyle;
    small: TextStyle;
    xSmall: TextStyle;
  };
  weight: {
    extraLight: string;
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
    extraBold: string;
  }
};

const base = {
  spacing: (m: number = 1) => 8 * m,
  radius: {
    xs: 4,
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
    pill: 999,
  },
  typography: {
    h1: {
      fontSize: 48,
      fontFamily: "Manrope_600SemiBold"
    },
    h2: {
      fontSize: 40,
      fontFamily: "Manrope_600SemiBold"
    },
    h3: {
      fontSize: 32,
      fontFamily: "Manrope_600SemiBold"
    },
    h4: {
      fontSize: 24,
      fontFamily: "Manrope_600SemiBold"
    },
    h5: {
      fontSize: 20,
      fontFamily: "Manrope_600SemiBold"
    },
    h6: {
      fontSize: 18,
      fontFamily: "Manrope_600SemiBold"
    },
    large: {
      fontSize: 18,
      fontFamily: "Manrope_600SemiBold"
    },
    medium: {
      fontSize: 18,
      fontFamily: "Manrope_600SemiBold"
    },
    small: {
      fontSize: 18,
      fontFamily: "Manrope_600SemiBold"
    },
    xSmall: {
      fontSize: 18,
      fontFamily: "Manrope_600SemiBold"
    },
  },
  weight: {
    extraLight: 'Manrope_200ExtraLight',
    light: 'Manrope_300Light',
    regular: 'Manrope_400Regular',
    medium: 'Manrope_500Medium',
    semiBold: 'Manrope_600SemiBold',
    bold: 'Manrope_700Bold',
    extraBold: 'Manrope_800ExtraBold',
  }
};

export const lightTheme: Theme = {
  scheme: "light",
  colors: {
    background: "#F8FAFB",
    surface: "#ECEFF3",
    divider: "#C1C7D0",
    text: "#151718",
    textParagraph: "#6F6F6F",
    mutedText: "#6B7280",
    primary: "#25D076",
    primaryTextOn: "#FFFFFF",
    border: "#E5E7EB",
    success: "#16A34A",
    warning: "#D97706",
    danger: "#DC2626",
    placeholder: "#666D80",
  },
  ...base,
};

export const darkTheme: Theme = {
  scheme: "dark",
  colors: {
    background: "#0B0D10",
    surface: "#151A1F",
    text: "#E5E7EB",
    divider: "#C1C7D0",
    textParagraph: "#6F6F6F",
    mutedText: "#9CA3AF",
    primary: "#25D076",
    primaryTextOn: "#0B0D10",
    border: "#1F2937",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    placeholder: "#666D80",
  },
  ...base,
};

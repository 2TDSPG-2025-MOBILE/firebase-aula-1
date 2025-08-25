import React from "react-native";
import { useTheme } from "hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonSSection, Form, HeaderSection, HeroSection } from "./sections";

export default function Login() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: theme?.colors?.background, gap: 20 }}>
      <HeaderSection />

      <HeroSection />

      <Form />

      <ButtonSSection />
    </SafeAreaView>
  )
}
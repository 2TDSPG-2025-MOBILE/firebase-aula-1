import React, { View } from "react-native";
import Logo from "@assets/logo.svg";
import { useTheme } from "hooks/theme";
import { authenticationStyle } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonSSection } from "./sections/ButtonsSection";
import { HeroSection } from "./sections/HeroSection";

export default function Authentication() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme?.colors?.background }}>
      <View
        style={authenticationStyle.container}
      >
        {/* Logo */}
        <Logo />

        <HeroSection />

        <ButtonSSection />
      </View>
    </SafeAreaView>
  )
}
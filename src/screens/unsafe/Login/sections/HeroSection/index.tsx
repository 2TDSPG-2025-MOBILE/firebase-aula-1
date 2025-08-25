import React from "react";
import { useTheme } from "hooks/theme";
import { Text, View } from "react-native";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <View>
      <Text
        style={theme?.typography?.h3}
      >
        Welcome Back
      </Text>
      <Text
        style={[
          theme?.typography?.medium,
          {
            fontFamily: theme?.weight?.regular,
            color: theme?.colors?.textParagraph
          }
        ]}
      >
        Please enter your email and Password to sign in
      </Text>
    </View>
  )
}
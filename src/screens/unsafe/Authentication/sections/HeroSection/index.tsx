import React from "react";
import { useTheme } from "hooks/theme";
import { Text, View } from "react-native";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <View>
      <Text
        style={theme.typography.h1}
      >
        Get ready to{"\n"}
        revolutionize{"\n"}
        with Posify
      </Text>

      <Text
        style={[
          theme.typography.medium,
          {
            color: theme?.colors?.textParagraph,
            fontFamily: theme?.weight?.regular
          }
        ]}
      >
        Get ready to revolutionize your POS
        experience with Posify. Seamlessly manage
        your transactions, inventory
      </Text>
    </View>
  )
}
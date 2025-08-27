import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "hooks/theme";
import { TouchableOpacity, View } from "react-native";
import LogoOnlyIcon from "@assets/logo-only.svg";
import ChevronLeftIcon from "@assets/chevron-left.svg";

export function HeaderSection() {
  const { theme } = useTheme();
  const { goBack } = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: theme?.colors?.background,
      }}
    >
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: theme?.colors?.border,
          borderRadius: 999
        }}
        onPress={goBack}
      >
        <ChevronLeftIcon />
      </TouchableOpacity>
      <LogoOnlyIcon />
    </View>
  );
}
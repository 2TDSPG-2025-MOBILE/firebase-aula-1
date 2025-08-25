import React from "react";
import { TouchableOpacity, View } from "react-native";

import LogoIcon from "@assets/logo.svg";
import ShoppingCartIcon from "@assets/shopping-cart-01.svg";
import BellIcon from "@assets/bell-03.svg";
import { useTheme } from "hooks/theme";

export function HeaderSection() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
      }}
    >
      <LogoIcon />

      <View
        style={{
          flexDirection: 'row',
          gap: 12
        }}
      >
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: theme?.colors?.surface,
            borderRadius: 999
          }}
        >
          <ShoppingCartIcon />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: theme?.colors?.surface,
            borderRadius: 999
          }}
        >
          <BellIcon />
        </TouchableOpacity>
      </View>

    </View>
  )
}
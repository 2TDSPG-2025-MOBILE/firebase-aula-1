import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


import { useTheme } from "hooks/theme";
import { HeaderSection } from "./sections";
import { SearchSection } from "./sections/SearchSection";
import { FilterSection } from "./sections/FilterSection";
import { ListOrderSection } from "./sections/ListOrderSection";

export default function Home() {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: theme?.colors?.background }}>
      <HeaderSection />

      {/* Search */}
      <SearchSection />

      {/* List Order */}
      <ListOrderSection />

      {/* Filter */}
      <FilterSection />

      {/* Menu */}
      <View>
        <Text>
          Menu
        </Text>
      </View>
    </View>
  )
}
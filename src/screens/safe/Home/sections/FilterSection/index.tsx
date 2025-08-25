import { useTheme } from "hooks/theme";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const filters = [
  "Hot Drink",
  "Food",
  "Soft Drink",
  "Noodle"
];

export function FilterSection() {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('Hot Drink');

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {filters.map(item => (
          <TouchableOpacity
            key={item}
            style={[{
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: theme?.colors?.border,
              borderRadius: 999
            },
            selectedFilter === item && {
              backgroundColor: "#000"
            }
            ]}
            onPress={() => setSelectedFilter(item)}
          >
            <Text
              style={[
                {
                  fontSize: 14
                },
                selectedFilter === item && {
                  color: "#fff"
                }
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
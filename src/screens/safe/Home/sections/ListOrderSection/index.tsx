import React from "react";
import { useTheme } from "hooks/theme";
import { ScrollView, Text, View } from "react-native";

import { ListOrderCard } from "../../components/ListOrderCard";


export const ordersMock = [
  {
    id: 4821,
    status: 'ready',
    owner: 'Lucas',
    location: 'Mesa 4',
    quantity: 2,
  },
  {
    id: 7390,
    status: 'cooked',
    owner: 'Ana',
    location: 'Mesa 1',
    quantity: 1,
  },
  {
    id: 1567,
    status: 'ready',
    owner: 'Carlos',
    location: 'Mesa 3',
    quantity: 3,
  },
  {
    id: 9044,
    status: 'cooked',
    owner: 'Mariana',
    location: 'Mesa 7',
    quantity: 5,
  },
  {
    id: 2231,
    status: 'ready',
    owner: 'João',
    location: 'Mesa 5',
    quantity: 4,
  },
];

export function ListOrderSection() {
  const { theme } = useTheme();

  return (
    <View>
      <View
        style={{
          padding: 10
        }}
      >
        <Text
          style={theme?.typography?.h5}
        >
          List Order
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {
          ordersMock.map(item => (
            <ListOrderCard
              data={item}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}
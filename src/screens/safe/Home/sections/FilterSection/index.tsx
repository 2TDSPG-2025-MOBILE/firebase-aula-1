import { useTheme } from "hooks/theme";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import firestore from '@react-native-firebase/firestore';

// const filters = [
//   "Hot Drink",
//   "Food",
//   "Soft Drink",
//   "Noodle"
// ];

const db = firestore();

interface IFiltersData {
  name: string
}

export function FilterSection() {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('Hot Drink');
  const [filters, setFilter] = useState<Array<IFiltersData>>([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await db.collection('categories').get();

      const newFiltes = querySnapshot?.docs?.map(item => item.data())

      setFilter(newFiltes)
    })()
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
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
            key={item.name}
            style={[{
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: theme?.colors?.border,
              borderRadius: 999
            },
            selectedFilter === item.name && {
              backgroundColor: "#000"
            }
            ]}
            onPress={() => setSelectedFilter(item.name)}
          >
            <Text
              style={[
                {
                  fontSize: 14
                },
                selectedFilter === item.name && {
                  color: "#fff"
                }
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
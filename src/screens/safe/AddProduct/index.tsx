import { Input } from "components/Inputs/Input";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddProduct() {

  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  async function submit() { }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          gap: 20,
          paddingHorizontal: 20
        }}
      >
        {/* description */}
        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        {/* imageUrl */}
        <Input
          placeholder="imageUrl"
          value={description}
          onChangeText={(text) => setImageUrl(text)}
        />

        {/* isAvailable */}
        {/* <Input
          placeholder="disponivel"
          value={isAvailable}
          onChangeText={(text) => setIsAvailable(text)}
        /> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-between'
          }}
        >
          <Text>Disponivel</Text>

          <TouchableOpacity
            onPress={() => setIsAvailable(prev => !prev)}
          >
            <Text>
              {isAvailable ? "SIM" : "NÃO"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* name */}
        <Input
          placeholder="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* price */}
        <Input
          placeholder="preço"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />

        {/* categoria */}
        <Input
          placeholder="Categoria"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#25D076",
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: "600"
            }}
          >
            Salvar
          </Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>

  )
}
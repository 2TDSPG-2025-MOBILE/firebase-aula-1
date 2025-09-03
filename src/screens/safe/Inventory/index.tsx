import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const db = firestore();

interface IProductProps {
  id: string;
  categoryId: string;
  categoryName?: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  name: string;
  price: number;
}

interface ICategoryPromisses {
  productId: string;
  categoryName: string;
}


export default function Inventory() {
  const {
    top
  } = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const [products, setProducts] = useState<Array<IProductProps>>([]);

  useEffect(() => {
    (async () => {
      const response = await db
        .collection('products')
        .get();

      const products: Array<IProductProps> = [];
      const categoryPromisses: Array<ICategoryPromisses> = [];

      response.forEach(async doc => {
        const productData = { id: doc.id, ...doc.data() } as IProductProps;

        products?.push(productData);

        const categoryId = productData?.categoryId?.split("/")[1] ?? null;

        if (categoryId) {
          const categoriRes = firestore()
            .collection('categories')
            .doc(categoryId)
            .get()
            .then(categoryDoc => {
              return {
                productId: productData.id,
                categoryName: categoryDoc.data()?.name || 'Categoria não encontrada'
              }
            });

          categoryPromisses?.push(categoriRes)
        }
      });

      const productsWithCategories = products.map(product => {

        const categoryResult = categoryPromisses?.find(res => {
          return res.productId === product?.id
        });


        return {
          ...product,
          categoryName: categoryResult?.categoryName
        }
      })

      setProducts(productsWithCategories);
    })();
  }, []);

  return (
    <View
      style={{
        paddingTop: top,
        flex: 1
      }}
    >
      <View style={{
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 20
        // alignItems: 'center'
      }
      }>
        {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Inventory</Text> */}

        {products.map(item => (
          <View>
            {/* Imagem/ detalhe */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20
              }}
            >
              {/* Imagem e price */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image
                  source={{
                    uri: item?.imageUrl
                  }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20
                  }}
                  resizeMode="cover"
                />

                <View>
                  <Text>{item?.name}</Text>
                  <Text>R$ {item?.price}</Text>
                </View>
              </View>

              {/* Able e stock */}
              {/* <View>
              <TouchableOpacity><Text>X</Text></TouchableOpacity>
              <Text>Stocks 60</Text>
            </View> */}
            </View>

            {/* Ações */}
            <View></View>
          </View>
        ))}



      </View>

      {/* Botão de adicionar */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 100,
          right: 40,
          backgroundColor: "#25D076",
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => navigate("AddProduct")}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

    </View>
  )
}
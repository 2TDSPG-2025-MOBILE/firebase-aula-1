import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import firestore from '@react-native-firebase/firestore';


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
  const [products, setProducts] = useState<Array<IProductProps>>([]);

  useEffect(() => {
    (async () => {
      const response = await firestore()
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Inventory</Text> */}

      {products.map(item => (
        <View>
          {/* Imagem/ detalhe */}
          <View>
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
            <View>
              <TouchableOpacity><Text>X</Text></TouchableOpacity>
              <Text>Stocks 60</Text>
            </View>
          </View>

          {/* Ações */}
          <View></View>
        </View>
      ))}
    </View>
  )
}
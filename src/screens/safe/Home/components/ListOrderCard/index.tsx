import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "hooks/theme";

import User01Icon from "@assets/user-01.svg";
import MarkerPin02Icon from "@assets/marker-pin-02.svg";
import ArrowUpRightIcon from "@assets/arrow-up-right.svg";


const typesColor = {
  ready: {
    border: "#A8ECC8",
    background: "#D3F6E4",
    text: "#51D991"
  },
  cooked: {
    border: "#FCDA83",
    background: "#FAEDCC",
    text: "#966422"
  }
} as const;

type TypeColorKeys = keyof typeof typesColor;

interface IOrderData {
  id: number;
  status: string;
  owner: string;
  location: string;
  quantity: number;
}

interface IListOrderCardProps {
  data: IOrderData;
}

const messageData = {
  ready: 'Ready to serve',
  cooked: 'Being Cooked',
}

export function ListOrderCard({ data }: IListOrderCardProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: typesColor[data?.status].border,
        backgroundColor: theme?.colors?.background,
        borderRadius: 20,
        padding: 12,
      }}
    >
      <View
        style={{
          gap: 4
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20
          }}
        >
          <View
            style={{
              backgroundColor: typesColor[data?.status].background,
              borderRadius: 999,
              paddingVertical: 1,
              paddingHorizontal: 8
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: typesColor[data?.status].text
              }}
            >
              {messageData[data?.status]}
            </Text>
          </View>

          <Text
            style={[
              theme?.typography?.xSmall,
              {
                color: theme?.colors?.textParagraph
              }
            ]}
          >
            #{data?.id}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 47
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8
            }}
          >
            <User01Icon width={16} height={16} />
            <Text
              style={theme?.typography?.small}
            >
              {data?.owner}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8
            }}
          >
            <MarkerPin02Icon width={16} height={16} />
            <Text
              style={theme?.typography?.small}
            >
              {data?.location}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={[
              theme?.typography?.xSmall,
              {
                color: theme?.colors?.textParagraph
              }
            ]}
          >
            {data?.quantity} {data?.quantity > 1 ? "itens" : "items"}
          </Text>

          <ArrowUpRightIcon />
        </View>

      </View>
    </TouchableOpacity>
  )
}
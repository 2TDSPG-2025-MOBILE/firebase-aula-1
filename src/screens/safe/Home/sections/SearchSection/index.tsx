import React from "react";
import { Input } from "components/Inputs/Input";
import { View } from "react-native";
import SearchLgIcon from "@assets/search-lg.svg";

export function SearchSection() {

  return (
    <View
      style={{
        padding: 10
      }}
    >
      <Input
        placeholder="Search menu"
        icon={SearchLgIcon}
      />
    </View>
  )
}
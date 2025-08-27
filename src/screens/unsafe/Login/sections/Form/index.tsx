import React from "react";
import { Input } from "components/Inputs/Input";
import { useTheme } from "hooks/theme";
import { Text, View } from "react-native";
import MailIcon from "@assets/mail-01.svg";
import LockUnlocked from "@assets/lock-unlocked-04.svg";

export function Form() {
  const { theme } = useTheme();

  return (
    <View style={{ gap: 20 }}>
      <Input
        title="Email"
        icon={MailIcon}
        placeholder="Enter your email"
      />
      <Input
        title="Password"
        icon={LockUnlocked}
        placeholder="Input your password"
        secureTextEntry
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={[
            theme?.typography?.small,
            {
              fontFamily: theme?.weight?.regular
            }
          ]}
        >
          Remember me
        </Text>
        <Text
          style={[
            theme?.typography?.small,
            {
              fontFamily: theme?.weight?.medium
            }
          ]}
        >
          Forgot Password?
        </Text>
      </View>
    </View>
  );
}
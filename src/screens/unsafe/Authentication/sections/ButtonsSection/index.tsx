import React from "react";
import { Button } from "components/Buttons/Button";
import { Text, View } from "react-native";
import { useTheme } from "hooks/theme";
import { useNavigation } from "@react-navigation/native";

import { SocialButton } from "components/Buttons/SocialButton";
import { styles } from "./styles";

export function ButtonSSection() {
  const { theme } = useTheme();
  const { navigate } = useNavigation();

  async function signWithGoogle() { }

  async function signWithApple() { }

  async function signWithEmail() {
    navigate("Login")
  }

  return (
    <View>
      <Button
        label="Sign in with Email"
        onPress={signWithEmail}
      />

      {/* Divisor */}
      <View
        style={styles?.dividerContainer}
      >
        <View
          style={[
            styles.divider,
            {
              backgroundColor: theme?.colors?.divider
            }
          ]}
        />

        <Text
          style={[
            theme.typography.medium,
            {
              color: theme?.colors?.textParagraph,
              fontFamily: theme?.weight.regular
            }
          ]}
        >
          Or sign in with
        </Text>

        <View
          style={[
            styles.divider,
            {
              backgroundColor: theme?.colors?.divider
            }
          ]}
        />
      </View>

      {/* Social buttons */}
      <View
        style={{
          gap: 20
        }}
      >
        <SocialButton label="Sign in with Google" type="google" />
        <SocialButton label="Sign in with Apple" type="apple" />
      </View>
    </View>
  )
}
import React from "react";
import { Button } from "components/Buttons/Button";
import { Pressable, Text, View } from "react-native";
import { useTheme } from "hooks/theme";
import { useNavigation } from "@react-navigation/native";

import { SocialButton } from "components/Buttons/SocialButton";
import { styles } from "./styles";

export function ButtonSSection() {
  const { theme } = useTheme();
  const { navigate } = useNavigation();

  async function loginWithGoogle() { }

  async function loginWithApple() { }

  async function loginWithEmail() { }

  return (
    <View
      style={{
        gap: 10
      }}
    >


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
          Or login with
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

      <View
        style={{
          gap: 20
        }}
      >
        <SocialButton label="Sign in with Google" type="google" />
        <SocialButton label="Sign in with Apple" type="apple" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'center'
        }}
      >
        <Text
          style={[
            theme?.typography?.medium,
            {
              fontFamily: theme?.weight?.regular
            }
          ]}
        >
          Don't have an account?
        </Text>

        <Pressable onPress={() => navigate("Register")}>
          <Text
            style={[
              theme?.typography?.medium,
              {
                color: theme?.colors?.primary
              }
            ]}
          >
            Register
          </Text>
        </Pressable>

      </View>
    </View>
  )
}
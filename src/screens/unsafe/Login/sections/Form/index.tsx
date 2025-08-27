import React, { useState } from "react";
import { Input } from "components/Inputs/Input";
import { useTheme } from "hooks/theme";
import { Text, View } from "react-native";
import MailIcon from "@assets/mail-01.svg";
import LockUnlocked from "@assets/lock-unlocked-04.svg";
import { Button } from "components/Buttons/Button";
import auth from "@react-native-firebase/auth"
import { useAuth } from "hooks/auth";
interface IFormProps {
}

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const { theme } = useTheme();

  async function submit() {
    try {
      await login({
        email,
        password
      });
    } catch (error) {
      console.log("===> submit")
      console.log(error)
      console.log("===> submit")
    }
  }

  return (
    <View style={{ gap: 20 }}>
      <Input
        title="Email"
        icon={MailIcon}
        placeholder="Enter your email"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Input
        title="Password"
        icon={LockUnlocked}
        placeholder="Input your password"
        value={password}
        onChangeText={e => setPassword(e)}
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

      <Button
        label="Login with Email"
        onPress={submit}
      />
    </View>
  );
}
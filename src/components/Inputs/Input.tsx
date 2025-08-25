import React, { useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { useTheme } from "hooks/theme";
import { SvgProps } from "react-native-svg";
import EyeIcon from "@assets/eye.svg";

interface IInputProps extends TextInputProps {
  title?: string;
  icon?: React.FC<SvgProps>;
}

export function Input({ title, icon: Icon, ...props }: IInputProps) {
  const [showPassword, setShowPassword] = useState(props?.secureTextEntry ?? false);

  const { theme } = useTheme();

  return (
    <View style={{ gap: 8 }}>
      {title && (
        <Text
          style={{
            fontSize: 14,
            fontFamily: theme?.weight?.medium,
            color: theme?.colors?.text
          }}
        >
          {title}
        </Text>
      )}

      <View
        style={{
          borderWidth: 1,
          borderColor: theme?.colors?.border,
          borderRadius: 999,
          paddingVertical: 5,
          paddingHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8
        }}
      >
        {Icon && <Icon />}

        <TextInput
          placeholderTextColor={theme?.colors?.placeholder}
          style={{
            fontFamily: theme?.weight?.regular,
            fontSize: 16,
            flex: 1
          }}
          {...props}
          secureTextEntry={showPassword}
        />

        {props?.secureTextEntry && (
          <Pressable onPress={() => setShowPassword(prev => !prev)}>
            <EyeIcon />
          </Pressable>
        )}
      </View>
    </View>
  )
}
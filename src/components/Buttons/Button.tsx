import React, { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "hooks/theme"

interface IButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...props }: IButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme?.colors?.primary,
        borderRadius: 100,
        padding: 13.5
      }}
      {...props}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontFamily: theme?.weight.semiBold,
          fontSize: 16
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
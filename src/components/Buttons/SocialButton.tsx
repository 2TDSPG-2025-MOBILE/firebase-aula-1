import React, { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "hooks/theme"
import GoogleIcon from "@assets/googleIcon.svg";
import AppleIcon from "@assets/appleIcon.svg";

interface ISocialButtonProps extends TouchableOpacityProps {
  type: 'google' | 'apple';
  label: string;
}

const labels = {
  google: 'Sign in with Google',
  apple: 'Sign in with Apple'
}

const icon = {
  google: <GoogleIcon />,
  apple: <AppleIcon />
}

export function SocialButton({ type, label, ...props }: ISocialButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: theme?.colors?.border,
        borderRadius: 100,
        padding: 13.5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
      }}
      {...props}
    >
      {icon[type]}

      <Text
        style={{
          fontSize: 16,
          fontFamily: theme?.weight?.semiBold,
          textAlign: 'center'
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
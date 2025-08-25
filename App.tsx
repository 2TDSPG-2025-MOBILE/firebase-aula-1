import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Authentication from './src/screens/Authentication';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold
} from '@expo-google-fonts/manrope';
import { AppThemeProvider } from 'hooks/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'navigation';
import { AuthProvider } from 'hooks/auth';

export default function App() {
  const [loaded, error] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <AuthProvider>
          <Routes />

          <StatusBar style="auto" />
        </AuthProvider>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

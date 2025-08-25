import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "screens/unsafe/Authentication";
import Login from "screens/unsafe/Login";
import Register from "screens/unsafe/Register";
import ForgotPassword from "screens/unsafe/ForgotPassword";
import OTPCodeVerification from "screens/unsafe/OTPCodeVerification";
import CreateNewPassword from "screens/unsafe/CreateNewPassword";

const { Navigator, Screen } = createNativeStackNavigator();

export default function UnsafeRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Authentication" component={Authentication} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />

      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="OTPCodeVerification" component={OTPCodeVerification} />
      <Screen name="CreateNewPassword" component={CreateNewPassword} />
    </Navigator>
  );
}
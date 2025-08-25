import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "screens/safe/Home";
import TabRoutes from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export default function SafeRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Dashboard" component={TabRoutes} />
      <Screen name="Notification" component={Home} />
      <Screen name="AllMenu" component={Home} />
      <Screen name="CartScreen" component={Home} />
      <Screen name="DetailProduct" component={Home} />
      <Screen name="Checkout" component={Home} />
      <Screen name="DetailPaymentSuccess" component={Home} />
      <Screen name="PrintReceipt" component={Home} />

      {/* Historico */}
      <Screen name="DetailHistorySuccess" component={Home} />
      <Screen name="DetailHistoryFailed" component={Home} />

      {/* Inventory */}
      <Screen name="AddProduct" component={Home} />

      {/* Profile */}
      <Screen name="EditProfile" component={Home} />


      {/* Report & Management */}
      <Screen name="ReportSales" component={Home} />
      <Screen name="ManagementProduct" component={Home} />

      <Screen name="ManagementVoucher" component={Home} />
      <Screen name="DetailVoucher" component={Home} />
      <Screen name="AddVoucher" component={Home} />

      <Screen name="ListCustomer" component={Home} />
      <Screen name="AddMemberCustomer" component={Home} />
    </Navigator>
  );
}
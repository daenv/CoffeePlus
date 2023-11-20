import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import TabNavigator from "./src/navigators/TabNavigator";
import DetailsScreen from "./src/screens/DetailsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ animation: "slide_from_bottom" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

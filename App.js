import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screen/Login";
import Home from "./src/screen/Dashboard";
import BottomNavigation from "./src/components/BottomNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "" }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            headerLeft: null,
          }}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

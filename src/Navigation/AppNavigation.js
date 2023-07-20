import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, Sign_Up, ForgotPassword, HomeScreen } from "../screens";
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={Sign_Up} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

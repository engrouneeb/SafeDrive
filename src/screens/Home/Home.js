import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Dashboard,
  ActivityScreen,
  FeedScreen,
  ProfileScreen,
} from "../index.js";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "Dashboard") {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name == "Activity") {
            iconName = focused ? "bar-chart" : "bar-chart-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name == "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name == "Feed") {
            iconName = focused ? "bell" : "bell-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name == "Profile") {
            iconName = "user";
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Settings" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export { HomeScreen };

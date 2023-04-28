import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screen/Dashboard";
import Settings from "../screen/Settings";
import ClockIn from "../screen/ClockIn";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const customTabBarStyle = {
    tabBarActiveTintColor: "#4329BA",
    tabBarInactiveTintColor: "#C7C9D9",
    style: { backgroundColor: "white" },
    tabBarStyle: {
      //   borderTopColor: "red",
      borderTopWidth: 1,
      //   borderTopLeftRadius: 20,
      //   borderTopRightRadius: 20,
      height: 80,
      paddingTop: 10,
    },
  };
  return (
    <Tab.Navigator initialRouteName="ClockIn" screenOptions={customTabBarStyle}>
      <Tab.Screen
        name="ClockIn"
        options={{
          tabBarLabel: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        component={ClockIn}
      />
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabel: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="dashboard" size={24} color={color} />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

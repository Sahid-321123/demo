import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ label }) => <Text>{label} screen</Text>;

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Search"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={22} color={color} />,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={() => <DummyScreen label="Favorite" />}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={22} color={color} />,
      }}
    />
    <Tab.Screen
      name="Booking"
      component={() => <DummyScreen label="Booking" />}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={22} color={color} />,
      }}
    />
    <Tab.Screen
      name="Conversations"
      component={() => <DummyScreen label="Conversations" />}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="chatbubble-outline" size={22} color={color} />,
      }}
    />
    <Tab.Screen
      name="More"
      component={() => <DummyScreen label="More" />}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="ellipsis-horizontal" size={22} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;

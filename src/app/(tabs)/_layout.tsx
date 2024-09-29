import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Updated TabBarIcon function to use MaterialCommunityIcons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="Categories"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="book-open-variant" color={color} />,
        }}
      />
      {/* Uncomment if you want to add more tabs */}
      {/* <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}

      {/* <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarButton: () => null 
        }}
      /> */}
      
    </Tabs>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import DonationScreen from '../screens/DonationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ title: 'KidsFeed Dashboard' }}
      />
      <Stack.Screen 
        name="Donation" 
        component={DonationScreen}
        options={{ title: 'Make a Donation' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
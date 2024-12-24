// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {
  LoginScreen,
  DashboardScreen,
  ProfileScreen,
  SettingsScreen,
} from '../screens';
import {RootState} from '../redux/store';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const {user, token} = useSelector((state: RootState) => state.auth);
  const role = user?.role ?? 'guest';

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            {role === 'member1' && (
              <>
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
              </>
            )}
            {role === 'member2' && (
              <>
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
              </>
            )}
            {role === 'guest' && (
              <>
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

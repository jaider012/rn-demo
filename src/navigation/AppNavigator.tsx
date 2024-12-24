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
import {ROLE_PERMISSIONS, ScreenName} from '../types/permissions';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const {user, token} = useSelector((state: RootState) => state.auth);
  const role = user?.role ?? 'guest';

  const hasPermission = (screenName: ScreenName) => {
    return ROLE_PERMISSIONS[role].includes(screenName);
  };

  const getInitialRouteName = (): ScreenName => {
    if (!token) {
      return 'Login' as ScreenName;
    }
    const allowedScreens = ROLE_PERMISSIONS[role];
    return allowedScreens[0]; // First allowed screen as default
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={getInitialRouteName()}>
        {!token ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              animationTypeForReplace: !token ? 'pop' : 'push',
            }}
          />
        ) : (
          <>
            {hasPermission('Dashboard') && (
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
            )}
            {hasPermission('Profile') && (
              <Stack.Screen name="Profile" component={ProfileScreen} />
            )}
            {hasPermission('Settings') && (
              <Stack.Screen name="Settings" component={SettingsScreen} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

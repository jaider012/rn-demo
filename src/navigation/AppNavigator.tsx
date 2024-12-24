// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Dashboard, Profile, Settings} from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  const role = user?.role || 'guest';

  const canAccessProfile = role === 'member1' || role === 'member2';
  const canAccessDashboard = role === 'member1' || role === 'guest';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {canAccessDashboard && (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        )}
        {canAccessProfile && (
          <Stack.Screen name="Profile" component={Profile} />
        )}
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

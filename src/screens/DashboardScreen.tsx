// src/screens/DashboardScreen.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {DashboardTemplate} from '../components/templetes/DashboardTemplate';
import {RootState} from '../redux/store';
import {NavigationProps} from '../types/navigation';

export const DashboardScreen = ({navigation}: NavigationProps<'Dashboard'>) => {
  const {user} = useSelector((state: RootState) => state.auth);

  const handleNavigate = (
    screen: 'Dashboard' | 'Login' | 'Profile' | 'Settings' | 'Home',
  ) => {
    navigation.navigate(screen);
  };

  return (
    <DashboardTemplate
      role={user?.role || 'guest'}
      onNavigate={handleNavigate}
    />
  );
};

// src/screens/HomeScreen.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {HomeTemplate} from '../components/templetes/HomeTemplate';
import {RootState} from '../redux/store';
import {NavigationProps} from '../types/navigation';

export const HomeScreen = ({navigation}: NavigationProps<'Home'>) => {
  const {user} = useSelector((state: RootState) => state.auth);

  const handleNavigate = (
    screen: 'Home' | 'Login' | 'Profile' | 'Settings' | 'Dashboard',
  ) => {
    navigation.navigate(screen);
  };

  return (
    <HomeTemplate role={user?.role || 'guest'} onNavigate={handleNavigate} />
  );
};

// src/screens/DashboardScreen.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {DashboardTemplate} from '../components/templetes/DashboardTemplate';
import {RootState} from '../redux/store';

export const DashboardScreen = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return <DashboardTemplate role={user?.role || 'defaultRole'} />;
};

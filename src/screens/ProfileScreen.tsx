// src/screens/ProfileScreen.tsx
import React from 'react';
import {useSelector} from 'react-redux';

import {ProfileTemplate} from '../components/templetes/ProfileTemplate';
import {RootState} from '../redux/store';

export const ProfileScreen = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  const handleEdit = () => {
    // Implement edit logic
    console.log('Edit profile');
  };

  if (!user) return null;

  return <ProfileTemplate user={user} onEdit={handleEdit} />;
};

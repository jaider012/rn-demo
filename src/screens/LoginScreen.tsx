// src/screens/LoginScreen.tsx
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  loginSuccess,
  loginFailure,
  setLoading,
} from '../redux/slices/authSlice';
import {LoginTemplate} from '../components/templetes/LoginTemplate';
import {RootState} from '../redux/store';
import {NavigationProps} from '../types/navigation';
import {User} from '../redux/types';

export const LoginScreen = ({navigation}: NavigationProps<'Login'>) => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector((state: RootState) => ({
    ...state.auth,
    error: state.auth.error ?? undefined,
  }));

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      dispatch(setLoading(true));
      const role = credentials.email.includes('member1')
        ? 'member1'
        : credentials.email.includes('member2')
        ? 'member2'
        : 'guest';
      const user: User = {
        id: '1',
        name: 'Test User',
        email: credentials.email,
        role,
      };

      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(loginSuccess({user, token: 'mock-token'}));
      navigation.replace('Dashboard');
    } catch (err) {
      dispatch(loginFailure('Login failed'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <LoginTemplate onSubmit={handleLogin} isLoading={isLoading} error={error} />
  );
};

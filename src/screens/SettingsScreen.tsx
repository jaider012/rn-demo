// src/screens/SettingsScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../components/atoms/Button';
import {Text} from '../components/atoms/Text';
import {logout} from '../redux/slices/authSlice';
import {NavigationProps} from '../types/navigation';

export const SettingsScreen = ({navigation}: NavigationProps<'Settings'>) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h1" style={styles.headerText}>
          ⚙️ Settings
        </Text>
        <Text variant="caption" style={styles.subtitle}>
          App preferences
        </Text>
      </View>
      <View style={styles.content}>
        <Button title="🚪 Logout" onPress={handleLogout} variant="danger" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  headerText: {
    color: '#1C1C1E',
  },
  subtitle: {
    marginTop: 4,
    color: '#8E8E93',
  },
  content: {
    padding: 20,
  },
});

// src/screens/Dashboard.tsx
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../components/atoms/Button';
import {RootState} from '../redux/store';

export const Dashboard = ({navigation}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const {user} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Text style={styles.welcome}>Welcome, {user?.role || 'Guest'}!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        disabled={user?.role === 'guest'}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
  },
});

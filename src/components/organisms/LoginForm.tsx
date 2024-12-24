// src/components/organisms/LoginForm.tsx
import React, {useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {FormField} from '../molecules/FormField';
import {Button} from '../atoms/Button';
import {Text} from '../atoms/Text';

interface LoginFormProps {
  onSubmit: (credentials: {email: string; password: string}) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const shakeAnim = React.useRef(new Animated.Value(0)).current;

  const handleSubmit = () => {
    if (!email || !password) {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }
    onSubmit({email, password});
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateX: shakeAnim}],
        },
      ]}>
      <Text variant="h2" style={styles.title}>
        Login
      </Text>
      <FormField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <FormField
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button
          title={isLoading ? 'Loading...' : 'Login'}
          onPress={handleSubmit}
          disabled={isLoading}
          fullWidth
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  error: {
    color: '#FF3B30',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 24,
  },
});

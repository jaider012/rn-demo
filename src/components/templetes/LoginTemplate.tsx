// src/components/templates/LoginTemplate.tsx
import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {Text} from '../atoms/Text';
import {LoginForm} from '../organisms/LoginForm';

interface LoginTemplateProps {
  onSubmit: (credentials: {email: string; password: string}) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onSubmit,
  isLoading,
  error,
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <View style={styles.content}>
      <View style={styles.header}>
        <Text variant="h1" style={styles.headerText}>
          🔐 Welcome
        </Text>
        <Text variant="body" style={styles.subtitle}>
          Please sign in to continue
        </Text>
      </View>
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} error={error} />
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: -50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerText: {
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    color: '#8E8E93',
  },
});

// src/components/molecules/FormField.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from '../atoms/Input';
import {Text} from '../atoms/Text';

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  secureTextEntry,
}) => (
  <View style={styles.container}>
    <Text variant="caption" style={styles.label}>
      {label}
    </Text>
    <Input
      value={value}
      onChangeText={onChangeText}
      error={error}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
  },
});

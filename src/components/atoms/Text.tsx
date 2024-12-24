// src/components/atoms/Text.tsx
import React from 'react';
import {Text as RNText, StyleProp, StyleSheet, TextStyle} from 'react-native';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color,
  children,
  style,
}) => (
  <RNText style={[styles[variant], color ? {color} : undefined, style]}>
    {children}
  </RNText>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: '#8E8E93',
  },
});

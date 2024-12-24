// src/components/molecules/Card.tsx
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Text} from '../atoms/Text';

interface CardProps {
  title: string;
  description?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  onPress,
  disabled,
}) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[styles.container, {transform: [{scale: scaleAnim}]}]}>
      {onPress ? (
        <TouchableOpacity
          style={[styles.card, disabled && styles.disabled]}
          onPress={!disabled ? onPress : undefined}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <Text variant="h3">{title}</Text>
          {description && (
            <Text variant="body" style={styles.description}>
              {description}
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <View style={[styles.card, disabled && styles.disabled]}>
          <Text variant="h3">{title}</Text>
          {description && (
            <Text variant="body" style={styles.description}>
              {description}
            </Text>
          )}
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  card: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  disabled: {
    opacity: 0.5,
  },
  description: {
    marginTop: 8,
    color: '#666',
  },
});

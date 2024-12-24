// src/components/molecules/Header.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../atoms/Text';
import {Button} from '../atoms/Button';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  rightAction?: {
    title: string;
    onPress: () => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton,
  onBack,
  rightAction,
}) => (
  <View style={styles.header}>
    {showBackButton && (
      <Button
        title="Back"
        variant="secondary"
        onPress={onBack ? onBack : () => {}}
      />
    )}
    <Text variant="h2" style={styles.title}>
      {title}
    </Text>
    {rightAction && (
      <Button
        title={rightAction.title}
        onPress={rightAction.onPress}
        variant="primary"
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
});

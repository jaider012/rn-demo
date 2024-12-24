// src/components/organisms/UserProfile.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from '../molecules/Card';
import {Button} from '../atoms/Button';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  onEdit?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({user, onEdit}) => (
  <View style={styles.container}>
    <Card
      title={`👋 ${user.name}`}
      description={`📧 ${user.email}\n👤 ${user.role}`}
    />
    {onEdit && (
      <View style={styles.editButtonContainer}>
        <View style={styles.editButtonWrapper}>
          <Button
            title="✏️ Edit Profile"
            onPress={onEdit}
            variant="secondary"
            fullWidth
          />
        </View>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editButtonContainer: {
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  editButtonWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

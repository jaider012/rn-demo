import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from '../molecules/Card';

interface NavigationMenuProps {
  role: string;
  onNavigate: (screen: 'Dashboard' | 'Login' | 'Profile' | 'Settings') => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  role,
  onNavigate,
}) => {
  const canAccessProfile = ['member1', 'member2'].includes(role);
  const canAccessDashboard = ['member1', 'guest'].includes(role);

  return (
    <View style={styles.container}>
      {canAccessDashboard && (
        <Card
          title="📊 Dashboard"
          description="View your dashboard and detailed analytics"
          onPress={() => onNavigate('Dashboard')}
        />
      )}
      {canAccessProfile && (
        <Card
          title="👤 Profile"
          description="Manage your personal information and preferences"
          onPress={() => onNavigate('Profile')}
        />
      )}
      <Card
        title="⚙️ Settings"
        description="Customize your app experience"
        onPress={() => onNavigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingHorizontal: 20,
    gap: 12,
    backgroundColor: '#F8F9FA',
  },
});

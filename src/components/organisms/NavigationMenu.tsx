import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from '../molecules/Card';
import {useScreenAccess} from '../../hooks/useScreenAccess';

interface NavigationMenuProps {
  role: string;
  onNavigate: (
    screen: 'Dashboard' | 'Login' | 'Profile' | 'Settings' | 'Home',
  ) => void;
}
export const NavigationMenu: React.FC<NavigationMenuProps> = ({onNavigate}) => {
  // Use the custom hook to get the hasAccess function
  const {hasAccess} = useScreenAccess();

  return (
    <View style={styles.container}>
      {/* Example of conditional rendering based on permissions */}
      {hasAccess('Dashboard') && (
        <Card
          title="📊 Dashboard"
          description="View your dashboard and detailed analytics"
          onPress={() => onNavigate('Dashboard')}
        />
      )}

      {/* Each menu item checks permissions before rendering */}
      {hasAccess('Profile') && (
        <Card
          title="👤 Profile"
          description="Manage your personal information and preferences"
          onPress={() => onNavigate('Profile')}
        />
      )}

      {/* Settings menu item */}
      {hasAccess('Settings') && (
        <Card
          title="⚙️ Settings"
          description="Customize your app experience"
          onPress={() => onNavigate('Settings')}
        />
      )}
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

// src/components/templates/ProfileTemplate.tsx
import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text} from '../atoms/Text';
import {Button} from '../atoms/Button';
import {UserProfile} from '../organisms/UserProfile';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/authSlice';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation';

interface ProfileTemplateProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  onEdit: () => void;
}

export const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
  user,
  onEdit,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="h1" style={styles.headerText}>
          👤 Profile
        </Text>
        <Text variant="caption" style={styles.subtitle}>
          Manage your information
        </Text>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <UserProfile user={user} onEdit={onEdit} />
        <View style={styles.logoutContainer}>
          <Button
            title="🚪 Logout"
            onPress={handleLogout}
            variant="danger"
            fullWidth
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  headerText: {
    color: '#1C1C1E',
  },
  subtitle: {
    marginTop: 4,
    color: '#8E8E93',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  logoutContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
});

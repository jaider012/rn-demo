// src/components/templates/HomeTemplate.tsx
import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text} from '../atoms/Text';
import {NavigationMenu} from '../organisms/NavigationMenu';

interface HomeTemplateProps {
  role: string;
  onNavigate: (
    screen: 'Home' | 'Login' | 'Profile' | 'Settings' | 'Dashboard',
  ) => void;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  role,
  onNavigate,
}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text variant="h1" style={styles.headerText}>
        ✨ Home
      </Text>
      <Text variant="caption" style={styles.subtitle}>
        Welcome back!
      </Text>
    </View>
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <NavigationMenu role={role} onNavigate={onNavigate} />
    </ScrollView>
  </SafeAreaView>
);

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
});

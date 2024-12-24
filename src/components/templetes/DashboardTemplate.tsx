// src/components/templates/DashboardTemplate.tsx
import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {Text} from '../atoms/Text';

interface DashboardTemplateProps {
  role: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({role}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text variant="h1" style={styles.headerTitle}>
          Corporate Dashboard
        </Text>
        <Text variant="caption" style={styles.headerSubtitle}>
          Hello {role}, here’s your daily overview.
        </Text>
      </View>

      {/* BODY (SIDEBAR + MAIN CONTENT) */}
      <View style={styles.body}>
        {/* MAIN CONTENT */}
        <View style={styles.main}>
          <ScrollView contentContainerStyle={styles.mainContent}>
            <Text variant="h2" style={styles.sectionTitle}>
              Key Metrics
            </Text>
            <Text style={styles.sectionDescription}>
              Explore the most relevant data and insights about your business,
              updated daily.
            </Text>

            {/* EJEMPLO DE TARJETAS */}
            <View style={styles.card}>
              <Text variant="h3" style={styles.cardTitle}>
                Sales Performance
              </Text>
              <Text style={styles.cardText}>
                Keep track of current sales trends and progress against targets.
              </Text>
            </View>
            <View style={styles.card}>
              <Text variant="h3" style={styles.cardTitle}>
                Team Productivity
              </Text>
              <Text style={styles.cardText}>
                Monitor your team’s performance and identify areas of
                improvement.
              </Text>
            </View>
            <View style={styles.card}>
              <Text variant="h3" style={styles.cardTitle}>
                Customer Satisfaction
              </Text>
              <Text style={styles.cardText}>
                Review feedback and maintain strong client relationships.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Your Company. All rights reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  /* CONTENEDOR PRINCIPAL */
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7', // un tono gris claro para darle un look más "corporativo"
  },

  /* HEADER */
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    // Sombra en iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    // Sombra en Android
    elevation: 3,
  },
  headerTitle: {
    color: '#0D6EFD', // Azul corporativo
    fontSize: 24,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#6C757D',
    marginTop: 4,
    fontSize: 16,
  },

  /* BODY (SIDEBAR + MAIN) */
  body: {
    flex: 1,
    flexDirection: 'row',
  },

  /* SIDEBAR */
  sidebar: {
    width: '25%',
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E5EA',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  sidebarTitle: {
    marginBottom: 16,
    fontSize: 18,
    color: '#0D6EFD',
    fontWeight: '600',
  },
  sidebarItem: {
    marginVertical: 8,
    color: '#333333',
    fontSize: 16,
  },

  /* MAIN */
  main: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  mainContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: '#212529',
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 24,
    color: '#495057',
  },

  /* TARJETAS (CARDS) */
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    // Sombra en iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    // Sombra en Android
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 4,
    color: '#0D6EFD',
    fontWeight: '600',
  },
  cardText: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 20,
  },

  /* FOOTER */
  footer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    alignItems: 'center',
  },
  footerText: {
    color: '#6C757D',
    fontSize: 14,
  },
});

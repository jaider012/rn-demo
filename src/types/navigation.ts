// src/types/navigation.ts
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Settings: undefined;
  Home: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};

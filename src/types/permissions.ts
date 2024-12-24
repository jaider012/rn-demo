export type UserRole = 'member1' | 'member2' | 'guest';
export type ScreenName = 'Dashboard' | 'Profile' | 'Settings' | 'Home';

export const ROLE_PERMISSIONS: Record<UserRole, ScreenName[]> = {
  member1: ['Home', 'Dashboard', 'Profile', 'Settings'],
  member2: ['Home', 'Dashboard', 'Profile'],
  guest: ['Home', 'Profile'],
};

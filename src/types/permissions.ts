export type UserRole = 'member1' | 'member2' | 'guest';
export type ScreenName = 'Dashboard' | 'Profile' | 'Settings';

export const ROLE_PERMISSIONS: Record<UserRole, ScreenName[]> = {
  member1: ['Dashboard', 'Profile', 'Settings'],
  member2: ['Dashboard', 'Settings'],
  guest: ['Profile', 'Settings'],
};

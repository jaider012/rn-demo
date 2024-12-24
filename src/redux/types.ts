export type UserRole = 'member1' | 'member2' | 'guest';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

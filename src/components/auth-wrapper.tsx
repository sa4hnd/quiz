'use client';

import { useAuth } from '@/lib/contexts/AuthContext';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  return children(auth);
}
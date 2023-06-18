'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export const SignOutButton = () => {
  return (
    <Button variant="secondary" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

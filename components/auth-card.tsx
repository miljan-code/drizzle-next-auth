'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

export const AuthCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (provider: string) => {
    setIsLoading(true);

    signIn(provider).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Card className="flex w-full max-w-sm flex-col px-8 py-10">
      <CardTitle className="pb-1">Welcome back</CardTitle>
      <CardDescription className="pb-8">Sign in to continue</CardDescription>
      <div className="flex flex-col space-y-2">
        <Button
          variant="outline"
          className="space-x-4 px-10"
          disabled={isLoading}
          onClick={() => handleSignIn('google')}
        >
          <Icons.google />
          <span className="text-xs sm:text-sm">Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          className="space-x-4 px-10"
          disabled={isLoading}
          onClick={() => handleSignIn('github')}
        >
          <Icons.gitHub />
          <span className="text-xs sm:text-sm">Continue with GitHub</span>
        </Button>
      </div>
    </Card>
  );
};

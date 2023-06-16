'use client';

import { useState } from 'react';
import { Icons } from './icons';
import { Button } from './ui/button';
import { Card, CardDescription, CardTitle } from './ui/card';

export const AuthCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  return (
    <Card className="flex w-full max-w-sm flex-col px-8 py-10">
      <CardTitle className="pb-1">
        {authType === 'login' ? 'Welcome back' : 'Hello 👋'}
      </CardTitle>
      <CardDescription className="pb-8">
        {authType === 'login' ? 'Sign in to continue' : 'Sign up to continue'}
      </CardDescription>
      <div className="flex flex-col space-y-2 pb-8">
        <Button
          variant="outline"
          className="space-x-4 px-10"
          disabled={isLoading}
        >
          <Icons.google />
          <span className="text-xs sm:text-sm">Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          className="space-x-4 px-10"
          disabled={isLoading}
        >
          <Icons.gitHub />
          <span className="text-xs sm:text-sm">Continue with GitHub</span>
        </Button>
      </div>
      {authType === 'login' ? (
        <p className="text-xs">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => setAuthType('register')}
            className="cursor-pointer font-medium text-indigo-500"
          >
            Sign up
          </span>{' '}
          instead.
        </p>
      ) : (
        <p className="text-xs">
          Already have an account?{' '}
          <span
            onClick={() => setAuthType('login')}
            className="cursor-pointer font-medium text-indigo-500"
          >
            Sign in
          </span>{' '}
          instead.
        </p>
      )}
    </Card>
  );
};

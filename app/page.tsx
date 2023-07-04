import { getSession } from '@/lib/auth/session';
import { AuthCard } from '@/components/auth-card';
import { SignOutButton } from '@/components/sign-out-button';

export default async function Home() {
  const session = await getSession();

  return (
    <main className="min-h-screen bg-dark text-white flex items-center justify-center">
      {!session ? <AuthCard /> : <SignOutButton />}
    </main>
  );
}

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { AuthCard } from '@/components/auth-card';
import { SignOutButton } from '@/components/sign-out-button';

const getSession = async () => {
  return await getServerSession(authOptions);
};

export default async function Home() {
  const session = await getSession();

  return (
    <main className="min-h-screen bg-dark text-white flex items-center justify-center">
      {!session ? <AuthCard /> : <SignOutButton />}
    </main>
  );
}

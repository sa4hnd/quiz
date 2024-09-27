import AuthWrapper from '@/components/auth-wrapper';
import Dashboard from '@/components/dashboard';

export default function Home() {
  return (
    <AuthWrapper>
      {(auth) => (
        <main className="min-h-screen bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Quiz Application</h1>
            <Dashboard auth={auth} />
          </div>
        </main>
      )}
    </AuthWrapper>
  );
}

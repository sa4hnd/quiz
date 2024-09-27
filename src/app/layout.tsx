import "./globals.css";
import { AuthProvider } from '@/lib/contexts/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

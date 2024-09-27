'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import SubjectList from './subject-list'
import QuizHistory from './quiz-history'
import SignInWithGoogle from './SignInWithGoogle'

interface DashboardProps {
  auth: ReturnType<typeof useAuth>
}

export default function Dashboard({ auth }: DashboardProps) {
  const { user, loading } = auth

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return (
      <div className="text-center">
        <p className="mb-4">Please sign in to access the quiz application.</p>
        <SignInWithGoogle />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Welcome, {user.displayName}!</h2>
      <SubjectList />
      <QuizHistory />
    </div>
  )
}
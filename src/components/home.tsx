'use client';

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Clock, History, Settings, LogOut } from 'lucide-react'
import SubjectList from '@/components/subject-list'
import { useAuth } from '@/lib/hooks/useAuth'

export default function Home() {
  const { user, signOut } = useAuth();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100" style={{backgroundImage: 'radial-gradient(circle, #ffffff0a 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      {/* ... rest of the component remains the same ... */}
    </div>
  )
}
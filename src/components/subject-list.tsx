'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { SelectItem } from "@/components/ui/select";
import LoadingIndicator from './loading-indicator';
import ErrorDisplay from './error-display';

interface Subject {
  id: string;
  name: string;
}

export default function SubjectList() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectsCollection = collection(db, 'subjects');
        const subjectsSnapshot = await getDocs(subjectsCollection);
        const subjectsData = subjectsSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setSubjects(subjectsData);
      } catch (err) {
        setError('Failed to load subjects. Please try again later.');
        console.error('Error fetching subjects:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <>
      {subjects.map((subject) => (
        <SelectItem key={subject.id} value={subject.id}>
          {subject.name}
        </SelectItem>
      ))}
    </>
  );
}
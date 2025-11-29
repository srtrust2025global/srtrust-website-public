import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Story {
  id: number;
  title: string;
  category: 'Education' | 'Healthcare' | 'Livelihood';
  image: string;
  location: string;
  excerpt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  image: string;
}
import { BookOpen, Heart, Users, Droplets } from 'lucide-react';
import { StatProps, TeamMember, Program, Story } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/work' },
  { label: 'Impact Stories', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'About Us', path: '/about' },
];

export const IMPACT_STATS: StatProps[] = [
  { value: '150+', label: 'Villages Reached', icon: Users },
  { value: '12,500', label: 'Children Educated', icon: BookOpen },
  { value: '8,000', label: 'Women Empowered', icon: Heart },
  { value: '500KL', label: 'Clean Water', icon: Droplets },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Anjali Deshmukh",
    role: "Founder & Managing Trustee",
    image: "https://picsum.photos/200/200?random=10",
    bio: "Former public health official with 25 years of experience in rural development."
  },
  {
    name: "Rajesh Kumar",
    role: "Director of Operations",
    image: "https://picsum.photos/200/200?random=11",
    bio: "Civil engineer turned social entrepreneur, overseeing infrastructure projects."
  },
  {
    name: "Priya Singh",
    role: "Head of Education",
    image: "https://picsum.photos/200/200?random=12",
    bio: "Education policy expert dedicated to bridging the digital divide."
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'Compassionate Care',
    title: 'Compassionate Care',
    description: 'We treat every patient with empathy, respect, and dignity.',
    stats: [
      { label: 'Schools Upgraded', value: '45' },
      { label: 'Digital Labs', value: '12' },
      { label: 'Scholarships', value: '1,200' }
    ],
    image: "https://picsum.photos/800/600?random=20"
  },
  {
    id: 'Clinical Excellence',
    title: 'Clinical Excellence',
    description: 'We follow evidence-based practices, advanced medical technology, and skilled professionals.',
    stats: [
      { label: 'Health Camps', value: '120' },
      { label: 'Beneficiaries', value: '45,000' },
      { label: 'Water Units', value: '85' }
    ],
    image: "https://picsum.photos/800/600?random=21"
  },
  {
    id: 'Patient Safety',
    title: 'Patient Safety',
    description: 'We ensure the highest standards of hygiene, transparency, and ethical care.',
    stats: [
      { label: 'Women Trained', value: '3,500' },
      { label: 'SHGs Formed', value: '250' },
      { label: 'Jobs Created', value: '1,800' }
    ],
    image: "https://picsum.photos/800/600?random=22"
  },
  {
    id: 'Trust and Integrity',
    title: 'Trust and Integrity',
    description: 'Honesty, ethical practices, and patient-first decisions guide everything we do.',
    stats: [
      { label: 'Families Aided', value: '5,000' },
      { label: 'Relief Kits', value: '10,000' },
      { label: 'Shelters Built', value: '200' }
    ],
    image: "https://picsum.photos/800/600?random=23"
  },
  {
    id: 'Accessibility and Affordability',
    title: 'Accessibility and Affordability',
    description: 'Quality healthcare should be reachable and affordable for everyone.',
    stats: [
      { label: 'Centers', value: '25' },
      { label: 'Students', value: '2,500' },
      { label: 'Women Certified', value: '800' }
    ],
    image: "https://picsum.photos/800/600?random=24"
  },
  {
    id: 'Continuous Support',
    title: 'Continuous Support',
    description: 'Comprehensive guidance—from consultation to recovery, including IVF journeys.',
    stats: [
      { label: 'Farmers Trained', value: '1,500' },
      { label: 'Organic Acres', value: '500' },
      { label: 'Yield Increase', value: '30%' }
    ],
    image: "https://picsum.photos/800/600?random=25"
  }
];
import { BookOpen, Heart, Users, Droplets, UserSearch, Baby, Stethoscope, GraduationCap } from 'lucide-react';
import { StatProps, TeamMember, Program, Story } from './types';


export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/work' },
  { label: 'Impact Stories', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'About Us', path: '/about' },
];

export const IMPACT_STATS: StatProps[] = [
  { value: '1,200+', label: 'Individuals screened', icon: Users },
  { value: '300+', label: 'Children examined', icon: Baby  },
  { value: '95+', label: 'Early-detection cases', icon: Stethoscope },
  { value: '450+', label: 'Health education sessions', icon: BookOpen },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Anjali Deshmukh",
    role: "Founder & Managing Trustee",
    image: '/assets/trustees/anjali.svg',
    bio: "Former public health official with 25 years of experience in rural development."
  },
  {
    name: "Rajesh Kumar",
    role: "Director of Operations",
    image: '/assets/trustees/rajesh.svg',
    bio: "Civil engineer turned social entrepreneur, overseeing infrastructure projects."
  },
  {
    name: "Priya Singh",
    role: "Head of Education",
    image: '/assets/trustees/priya.svg',
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
    image: '/assets/core-pillers/compassion_care.jpg'
  },
  {
    id: 'Clinical Excellence',
    title: 'Clinical Excellence',
      description: 'We follow evidence-based practices, use advanced medical technology, and employ skilled professionals.',
    stats: [
      { label: 'Health Camps', value: '120' },
      { label: 'Beneficiaries', value: '45,000' },
      { label: 'Water Units', value: '85' }
    ],
    image: '/assets/core-pillers/clinical_excelance.jpg'
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
      image: '/assets/core-pillers/patient_safty.jpg'
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
    image: '/assets/core-pillers/trust_and_integrity.jpg'
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
    image: '/assets/core-pillers/affordable.jpg'
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
      image: '/assets/core-pillers/contiuous.jpg'
  }
];
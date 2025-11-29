import { BookOpen, Heart, Users, Droplets } from 'lucide-react';
import { StatProps, TeamMember, Program, Story } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/work' },
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
    id: 'shiksha',
    title: 'Shiksha (Education)',
    description: 'Empowering the next generation through digital literacy labs, scholarship programs, and school infrastructure upgrades.',
    stats: [
      { label: 'Schools Upgraded', value: '45' },
      { label: 'Digital Labs', value: '12' },
      { label: 'Scholarships', value: '1,200' }
    ],
    image: "https://picsum.photos/800/600?random=20"
  },
  {
    id: 'swasthya',
    title: 'Swasthya (Healthcare)',
    description: 'Bringing essential healthcare to doorsteps through mobile clinics, sanitation drives, and clean water installations.',
    stats: [
      { label: 'Health Camps', value: '120' },
      { label: 'Beneficiaries', value: '45,000' },
      { label: 'Water Units', value: '85' }
    ],
    image: "https://picsum.photos/800/600?random=21"
  },
  {
    id: 'aatmanirbharta',
    title: 'Aatmanirbharta (Livelihood)',
    description: 'Creating self-reliant communities through vocational training, Self Help Groups (SHGs), and market linkage.',
    stats: [
      { label: 'Women Trained', value: '3,500' },
      { label: 'SHGs Formed', value: '250' },
      { label: 'Jobs Created', value: '1,800' }
    ],
    image: "https://picsum.photos/800/600?random=22"
  },
  {
    id: 'rahat',
    title: 'Rahat (Disaster Relief)',
    description: 'Providing immediate emergency response and long-term rehabilitation support to communities affected by natural disasters.',
    stats: [
      { label: 'Families Aided', value: '5,000' },
      { label: 'Relief Kits', value: '10,000' },
      { label: 'Shelters Built', value: '200' }
    ],
    image: "https://picsum.photos/800/600?random=23"
  },
  {
    id: 'digital-sakshar',
    title: 'Digital Sakshar (Literacy)',
    description: 'Bridging the digital divide by providing computer education and internet access to rural youth and women.',
    stats: [
      { label: 'Centers', value: '25' },
      { label: 'Students', value: '2,500' },
      { label: 'Women Certified', value: '800' }
    ],
    image: "https://picsum.photos/800/600?random=24"
  },
  {
    id: 'kisan-shakti',
    title: 'Kisan Shakti (Agriculture)',
    description: 'Promoting sustainable farming practices, organic cultivation, and modern irrigation techniques among small farmers.',
    stats: [
      { label: 'Farmers Trained', value: '1,500' },
      { label: 'Organic Acres', value: '500' },
      { label: 'Yield Increase', value: '30%' }
    ],
    image: "https://picsum.photos/800/600?random=25"
  }
];
import { Users, Briefcase, Award, ChevronRight, Heart } from "lucide-react";
import john from '../assets/arera.png';
import elisha from '../assets/onyando_photo.png';


export const teamMembers = [
  {
    name: "John Ouma",
    role: "Software Engineer & Cybersecurity Specialist",
    bio: "John is a versatile software engineer and cybersecurity specialist with a strong background in building secure, scalable applications. He drives the architecture and development of key systems, ensuring both innovation and resilience across our platforms.",
    image: john
  },
  {
    name: "Elisha Onyando",
    role: "Software Engineer, QA & Cybersecurity Specialist",
    bio: "Elisha contributes extensively across software engineering, quality assurance, and cybersecurity. He plays a pivotal role in maintaining code quality, enhancing system security, and ensuring our solutions meet the highest standards of performance and reliability.",
    image: elisha
  }
];
  
export const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and explore new possibilities.",
    icon: Award
  },
  {
    title: "Collaboration",
    description: "We believe great ideas come from diverse teams working together.",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We strive for exceptional quality in everything we deliver.",
    icon: Briefcase
  },
  {
    title: "Integrity",
    description: "We build trust through transparent and ethical practices.",
    icon: Heart
  }
];
  
export const milestones = [
    { year: 2018, event: "Company founded with just 3 team members" },
    { year: 2019, event: "Launched our flagship product and secured first major client" },
    { year: 2020, event: "Expanded team to 15 people and moved to larger office" },
    { year: 2022, event: "Reached $1M in annual revenue and expanded internationally" },
    { year: 2024, event: "Grew to 50+ team members across 3 continents" }
  ];
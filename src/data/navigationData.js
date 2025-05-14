import { Shield, Code, Database, Palette, Presentation } from 'lucide-react';

export const navItems = [
  {
    name: 'Services',
    href: '#services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Software Engineering', href: '/services/software', icon: Code },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Data Science & AI', href: '/services/data-science', icon: Database },
       { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: Palette },
      { name: 'IT Consulting & Advisory', href: '/services/it-consulting', icon: Presentation }
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  // { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' }
];

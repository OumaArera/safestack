export const services = [
  {
    title: 'Software Development',
    route: '/services/software',
    details: [
      'Custom Web Development (e.g., eCommerce platforms, CMS solutions)',
      'Mobile App Development (Native & Cross-Platform)',
      'Enterprise Software Solutions (ERP, CRM systems)',
      'API Development & Systems Integration',
      'Software Modernization & Migration (Legacy Systems Upgrades)',
      'SaaS Product Development',
      'Quality Assurance & Testing (Performance, Integration, Automation)',
      'DevOps Services (CI/CD pipelines, deployment automation, monitoring & logging)'
    ]
  },
  {
    title: 'Cybersecurity Solutions',
    route: '/services/cybersecurity',
    details: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Cybersecurity Audits & Risk Assessments',
      'Managed Security Services & Monitoring',
      'Incident Response & Digital Forensics',
      'Security Awareness & Training Programs',
      'Secure Software Development (SSDLC best practices)'
    ]
  },
  {
    title: 'Data & AI Solutions',
    route: '/services/data-science',
    details: [
      'Business Intelligence Dashboards & Analytics Solutions',
      'Data Warehousing & Engineering Pipelines',
      'Predictive Analytics & Forecasting',
      'Machine Learning Model Development',
      'Natural Language Processing (NLP) Solutions',
      'AI Strategy, Consulting & Implementation Support'
    ]
  },
  {
    title: 'UI/UX & Design Services',
    route: '/services/ui-ux-design',
    details: [
      'UI/UX Research & Design (Wireframes, Prototypes, Figma Designs)',
      'Mobile & Web Interface Design',
      'Design System Creation & Branding Guidelines',
      'Web Graphics & Digital Media (e.g., Posters, Social Media Assets)'
    ]
  },
  {
    title: 'IT Consulting & Advisory',
    route: '/services/it-consulting',
    details: [
      'Technical Consulting & Digital Strategy',
      'Business Requirement Documentation (BRDs)',
      'Process Flow & Solution Architecture Design',
      'Technical Documentation (e.g., Sequence Diagrams, System Maps)',
      'Feasibility Studies & Technology Recommendations'
    ]
  }
];



export const boardVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
};

export const bgGradient = () => {
    const colors = [
      ['from-blue-600', 'via-indigo-500', 'to-violet-600'],
      ['from-emerald-500', 'via-teal-600', 'to-cyan-600'],
      ['from-rose-500', 'via-pink-600', 'to-purple-700'],
      ['from-amber-500', 'via-orange-600', 'to-red-600']
    ];
    
    return colors[activeIndex % colors.length].join(' ');
  };
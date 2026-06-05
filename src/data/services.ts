export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  waMessage: string;
}

export const services: Service[] = [
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'End-to-end hardware procurement and setup for offices and enterprises across Mumbai.',
    bullets: ['Laptops & Desktops', 'Servers & NAS', 'Network Switches & Firewall', 'UPS & Power Backup', 'CCTV & Access Control'],
    waMessage: 'Hi GidsTek, I need IT infrastructure support for my office in Mumbai. Can you help?',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built and maintained for businesses of all sizes.',
    bullets: ['Corporate Websites', 'E-commerce Portals', 'Web Application Maintenance', 'CMS & Blog Platforms'],
    waMessage: 'Hi GidsTek, I\'m looking for a web development quote. Please get in touch.',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native, hybrid, and PWA applications for Android and iOS.',
    bullets: ['Flutter & React Native', 'Android & iOS Native', 'PWA Development', 'App Maintenance & Support'],
    waMessage: 'Hi GidsTek, I need a mobile app developed. Can we discuss requirements?',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-stack digital marketing to grow your online presence and generate leads.',
    bullets: ['SEO / SEM', 'Social Media Management', 'Pay Per Click (PPC)', 'Content & Branding'],
    waMessage: 'Hi GidsTek, I\'m interested in digital marketing services for my business.',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Helping businesses leverage technology to improve operations and reduce costs.',
    bullets: ['Technology Roadmapping', 'Process Automation', 'Vendor Selection', 'Infrastructure Audits'],
    waMessage: 'Hi GidsTek, I need IT consulting for my business. Can we set up a call?',
  },
  {
    id: 'it-support',
    title: 'IT Support & Services',
    description: 'Remote and onsite support, repair, and maintenance for your IT infrastructure.',
    bullets: ['Remote & Onsite Support', 'Hardware Repair & Maintenance', 'Dedicated Field Engineers', 'Outsource IT Support'],
    waMessage: 'Hi GidsTek, I need IT support services. Please share your packages.',
  },
];

import { ContentConfig } from './types';

export const CONTENT: ContentConfig = {
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#technology' },
    { label: 'Download', href: '#download' },
    { label: 'Insights', href: '#insights' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: "Your personal medical vault, powered by AI.",
    subhead: "Scan prescriptions, analyze lab reports, and manage your health schedule with a privacy-first AI assistant.",
    primaryCta: "Get Early Access",
    secondaryCta: "View Features",
  },
  pillars: [
    {
      id: 'scanning',
      title: "Smart Digitization",
      subtitle: "From paper to intelligence.",
      description: [
        "Instant camera capture for prescriptions & lab reports.",
        "Automatic document type detection and cropping.",
        "Powered by advanced AI for precise extraction."
      ],
      cta: "See Scanning Demo",
      color: "#14b8a6", // Teal 500
    },
    {
      id: 'management',
      title: "Active Management",
      subtitle: "Never miss a dose again.",
      description: [
        "Visual medication timelines and grid views.",
        "Smart reminders synced with Google Calendar.",
        "Track frequency, purpose, and purchase history."
      ],
      cta: "Explore Scheduling",
      color: "#8b5cf6", // Violet 500
    },
    {
      id: 'analysis',
      title: "Clinical Insights",
      subtitle: "Lab results, demystified.",
      description: [
        "AI analysis of Complete Blood Count (CBC) and reports.",
        "Instant normal-range comparisons and health summaries.",
        "Searchable, encrypted history of all your diagnoses."
      ],
      cta: "View Analysis Engine",
      color: "#10b981", // Emerald 500
    },
  ],
  stats: [
    { value: "Advanced AI", label: "Core Model" },
    { value: "AES-256", label: "E2E Encryption" },
    { value: "100%", label: "Privacy First" },
    { value: "< 2s", label: "Analysis Time" },
  ],
  useCases: [
    { title: "Prescription Parser", description: "Extract med names, dosages, and instructions instantly from photos.", icon: "file-text" },
    { title: "Lab Result Analyzer", description: "Understand complex lab metrics with simple AI explanations.", icon: "microscope" },
    { title: "Medication Tracker", description: "Visual grids and timeline views for your daily regimen.", icon: "pill" },
    { title: "Health Summaries", description: "Generate concise summaries of diagnosis documents.", icon: "activity" },
    { title: "Calendar Sync", description: "Seamless integration with Google Calendar for reminders.", icon: "calendar" },
    { title: "Secure Archive", description: "Firebase-backed secure storage for your medical history.", icon: "lock" },
  ],
  gallery: [
    { 
      title: "Welcome Screen", 
      description: "Beautiful onboarding experience to get you started.", 
      image: "/images/Screenshot_2025-12-02-01-45-24-22_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Onboarding" 
    },
    { 
      title: "Home Dashboard", 
      description: "Your health hub with quick access to all features.", 
      image: "/images/Screenshot_2025-12-02-01-45-32-86_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Smart Scan", 
      description: "Instantly detect and analyze medical documents.", 
      image: "/images/Screenshot_2025-12-02-01-45-40-98_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "AI Analysis", 
      description: "Deep insights into dermatology and lab reports.", 
      image: "/images/Screenshot_2025-12-02-01-45-59-22_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Intelligence" 
    },
    { 
      title: "Medicine Cabinet", 
      description: "A clear, visual grid of your active prescriptions.", 
      image: "/images/Screenshot_2025-12-02-01-46-02-66_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Medication Details", 
      description: "Comprehensive dosage and instruction info.", 
      image: "/images/Screenshot_2025-12-02-01-46-07-20_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Daily Schedule", 
      description: "Timeline view with smart adherence tracking.", 
      image: "/images/Screenshot_2025-12-02-01-46-09-73_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Health Reminders", 
      description: "Smart notifications for your medication schedule.", 
      image: "/images/Screenshot_2025-12-02-01-46-12-91_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Lab Results", 
      description: "Understand your CBC metrics with normal ranges.", 
      image: "/images/Screenshot_2025-12-02-01-46-21-05_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Intelligence" 
    },
    { 
      title: "Report Analysis", 
      description: "AI-powered analysis of your medical reports.", 
      image: "/images/Screenshot_2025-12-02-01-46-25-27_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Intelligence" 
    },
    { 
      title: "Digital Notebook", 
      description: "Searchable archive of all your medical history.", 
      image: "/images/Screenshot_2025-12-02-01-47-08-21_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Health Summary", 
      description: "Concise summaries of your health conditions.", 
      image: "/images/Screenshot_2025-12-02-01-47-12-64_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Intelligence" 
    },
    { 
      title: "Calendar Sync", 
      description: "Seamless integration with Google Calendar.", 
      image: "/images/Screenshot_2025-12-02-01-47-35-80_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Secure Archive", 
      description: "Firebase-backed secure storage for your records.", 
      image: "/images/Screenshot_2025-12-02-01-47-38-69_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    },
    { 
      title: "Profile & Settings", 
      description: "Manage your account and privacy preferences.", 
      image: "/images/Screenshot_2025-12-02-01-47-47-76_231b3b00131ed1acadb706f5a75af86c.jpg", 
      category: "Core" 
    }
  ],
  insights: [
    { title: "Leveraging AI for Medical Extraction", date: "Dec 02, 2024", tag: "AI Tech" },
    { title: "The Importance of Normal Range Monitoring", date: "Nov 28, 2024", tag: "Health" },
    { title: "Privacy-First Architecture in Health Apps", date: "Nov 15, 2024", tag: "Security" },
  ],
  careers: {
    headline: "Join the digital health revolution.",
    locations: ["Remote", "Toronto", "Dhaka", "San Francisco"],
    cta: "View Open Roles",
  },
  footer: {
    links: [
      { category: "App", items: ["Early Access", "Roadmap", "Features", "Pricing"] },
      { category: "Company", items: ["About", "Careers", "Press", "Contact"] },
      { category: "Legal", items: ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Data Safety"] },
    ],
    copyright: "© 2024 MedVault AI. All rights reserved.",
    team: "Team MediVault AI",
    email: "ankonahamed@iut-dhaka.edu"
  },
};

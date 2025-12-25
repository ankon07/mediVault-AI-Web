import { ContentConfig } from './types';

export const CONTENT: ContentConfig = {
  nav: [
    { label: 'nav.features', href: '#features' },
    { label: 'nav.technology', href: '#technology' },
    { label: 'nav.download', href: '#download' },
    { label: 'nav.insights', href: '#insights' },
    { label: 'nav.about', href: '#about' },
    { label: 'nav.contact', href: '#contact' },
  ],
  hero: {
    headline: "hero.headline",
    subhead: "hero.subhead",
    primaryCta: "hero.primaryCta",
    secondaryCta: "hero.secondaryCta",
  },
  pillars: [
    {
      id: 'scanning',
      title: "pillars.scanning.title",
      subtitle: "pillars.scanning.subtitle",
      description: [
        "pillars.scanning.description.0",
        "pillars.scanning.description.1",
        "pillars.scanning.description.2"
      ],
      cta: "pillars.scanning.cta",
      color: "#14b8a6", // Teal 500
    },
    {
      id: 'management',
      title: "pillars.management.title",
      subtitle: "pillars.management.subtitle",
      description: [
        "pillars.management.description.0",
        "pillars.management.description.1",
        "pillars.management.description.2"
      ],
      cta: "pillars.management.cta",
      color: "#8b5cf6", // Violet 500
    },
    {
      id: 'analysis',
      title: "pillars.analysis.title",
      subtitle: "pillars.analysis.subtitle",
      description: [
        "pillars.analysis.description.0",
        "pillars.analysis.description.1",
        "pillars.analysis.description.2"
      ],
      cta: "pillars.analysis.cta",
      color: "#10b981", // Emerald 500
    },
  ],
  stats: [
    { value: "stats.0.value", label: "stats.0.label" },
    { value: "stats.1.value", label: "stats.1.label" },
    { value: "stats.2.value", label: "stats.2.label" },
    { value: "stats.3.value", label: "stats.3.label" },
  ],
  useCases: [
    { title: "useCases.prescriptionParser.title", description: "useCases.prescriptionParser.description", icon: "file-text" },
    { title: "useCases.labResultAnalyzer.title", description: "useCases.labResultAnalyzer.description", icon: "microscope" },
    { title: "useCases.medicationTracker.title", description: "useCases.medicationTracker.description", icon: "pill" },
    { title: "useCases.healthSummaries.title", description: "useCases.healthSummaries.description", icon: "activity" },
    { title: "useCases.calendarSync.title", description: "useCases.calendarSync.description", icon: "calendar" },
    { title: "useCases.secureArchive.title", description: "useCases.secureArchive.description", icon: "lock" },
  ],
  gallery: [
    {
      title: "gallery.items.welcomeScreen.title",
      description: "gallery.items.welcomeScreen.description",
      image: "/images/Screenshot_2025-12-02-01-45-24-22_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.onboarding"
    },
    {
      title: "gallery.items.homeDashboard.title",
      description: "gallery.items.homeDashboard.description",
      image: "/images/Screenshot_2025-12-02-01-45-32-86_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.smartScan.title",
      description: "gallery.items.smartScan.description",
      image: "/images/Screenshot_2025-12-02-01-45-40-98_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.aiAnalysis.title",
      description: "gallery.items.aiAnalysis.description",
      image: "/images/Screenshot_2025-12-02-01-45-59-22_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.intelligence"
    },
    {
      title: "gallery.items.medicineCabinet.title",
      description: "gallery.items.medicineCabinet.description",
      image: "/images/Screenshot_2025-12-02-01-46-02-66_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.medicationDetails.title",
      description: "gallery.items.medicationDetails.description",
      image: "/images/Screenshot_2025-12-02-01-46-07-20_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.dailySchedule.title",
      description: "gallery.items.dailySchedule.description",
      image: "/images/Screenshot_2025-12-02-01-46-09-73_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.healthReminders.title",
      description: "gallery.items.healthReminders.description",
      image: "/images/Screenshot_2025-12-02-01-46-12-91_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.labResults.title",
      description: "gallery.items.labResults.description",
      image: "/images/Screenshot_2025-12-02-01-46-21-05_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.intelligence"
    },
    {
      title: "gallery.items.reportAnalysis.title",
      description: "gallery.items.reportAnalysis.description",
      image: "/images/Screenshot_2025-12-02-01-46-25-27_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.intelligence"
    },
    {
      title: "gallery.items.digitalNotebook.title",
      description: "gallery.items.digitalNotebook.description",
      image: "/images/Screenshot_2025-12-02-01-47-08-21_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.healthSummary.title",
      description: "gallery.items.healthSummary.description",
      image: "/images/Screenshot_2025-12-02-01-47-12-64_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.intelligence"
    },
    {
      title: "gallery.items.calendarSync.title",
      description: "gallery.items.calendarSync.description",
      image: "/images/Screenshot_2025-12-02-01-47-35-80_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.secureArchive.title",
      description: "gallery.items.secureArchive.description",
      image: "/images/Screenshot_2025-12-02-01-47-38-69_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    },
    {
      title: "gallery.items.profileSettings.title",
      description: "gallery.items.profileSettings.description",
      image: "/images/Screenshot_2025-12-02-01-47-47-76_231b3b00131ed1acadb706f5a75af86c.jpg",
      category: "gallery.categories.core"
    }
  ],
  insights: [
    { title: "insights.items.0.title", date: "insights.items.0.date", tag: "insights.items.0.tag" },
    { title: "insights.items.1.title", date: "insights.items.1.date", tag: "insights.items.1.tag" },
    { title: "insights.items.2.title", date: "insights.items.2.date", tag: "insights.items.2.tag" },
  ],
  careers: {
    headline: "download.headline",
    locations: ["Remote", "Toronto", "Dhaka", "San Francisco"],
    cta: "download.joinWaitlist",
  },
  footer: {
    links: [
      { category: "footer.links.app.category", items: ["footer.links.app.earlyAccess", "footer.links.app.roadmap", "footer.links.app.features", "footer.links.app.pricing"] },
      { category: "footer.links.company.category", items: ["footer.links.company.about", "footer.links.company.careers", "footer.links.company.press", "footer.links.company.contact"] },
      { category: "footer.links.legal.category", items: ["footer.links.legal.privacyPolicy", "footer.links.legal.termsOfService", "footer.links.legal.hipaaCompliance", "footer.links.legal.dataSafety"] },
    ],
    copyright: "footer.copyright",
    team: "footer.team",
    email: "ankonahamed@iut-dhaka.edu"
  },
};

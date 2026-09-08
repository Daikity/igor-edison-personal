import type { ExperienceData, Skills } from '@/app/types';

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  menu: {
    home: string;
    experience: string;
    projects: string;
    skillset: string;
    contacts: string;
  };
  main: {
    name: string;
    role: string;
    location: string;
    description1: string;
    description2: string;
    photoAlt: string;
  };
  experience: {
    title: string;
    subtitle: string;
    data: ExperienceData[];
  };
  philosophy: {
    title: string;
    lead: string;
    paragraphs: string[];
    imageAlt: string;
  };
  skillSet: {
    title: string;
    description: string;
    skillList: Skills[];
  };
  projects: {
    title: string;
    subtitle: string;
    openCase: string;
    openDemo: string;
    statusOnline: string;
  };
  contacts: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      telegram: string;
      message: string;
      button: string;
      sending: string;
      placeholders: {
        name: string;
        email: string;
        telegram: string;
        message: string;
      };
    };
  };
  base_texts: {
    message_success: string;
    message_error: {
      name: string;
      email: string;
      message: string;
      telegram: string;
      generic: string;
      generic_retry: string;
    };
  };
  footer: {
    copyright: string;
    tagline: string;
    skills: string;
    navLabel: string;
    socialLabel: string;
  };
}

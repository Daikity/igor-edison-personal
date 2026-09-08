import type { Dictionary } from '@/i18n/types';

const dictionary: Dictionary = {
  metadata: {
    title: 'Igor Edison — Frontend Developer',
    description:
      'Portfolio of frontend developer Igor Edison: React, Next.js, TypeScript. Experience, skills, and contact.',
    keywords: 'frontend, developer, portfolio, react, nextjs, typescript, Igor Edison',
  },
  menu: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    skillset: 'Skillset',
    contacts: 'Contacts',
  },
  main: {
    name: "I'm Igor Edison.",
    role: 'A web developer',
    location: 'based in Russia.',
    description1: "I'm one of the most engaged web developers you have ever worked with.",
    description2:
      "If you have a great project that needs professional skills, I'm your guy.",
    photoAlt: 'Portrait of Igor Edison',
  },
  experience: {
    title: 'work experience',
    subtitle: 'Companies I have worked with',
    data: [
      {
        roleInCompany: 'Middle+ Frontend Developer',
        companyName: 'Kiwitaxi',
        shortDescriptionWork:
          "Our team rebranded the company's website. I developed the UI kit and the homepage.",
        counter: '01',
        companyColor: '#fdba74',
      },
      {
        roleInCompany: 'Expert Developer',
        companyName: 'Sciener',
        shortDescriptionWork:
          'RusAgro project: migrated the app from SAPUI5 to Vue.js to improve performance.',
        counter: '02',
        companyColor: '#ef4444',
      },
      {
        roleInCompany: 'Frontend Developer',
        companyName: 'Molga',
        shortDescriptionWork:
          'Supported and delivered SAPUI5 projects for Norilsk Nickel, Severstal, and M.Video (HR module).',
        counter: '03',
        companyColor: '#3b82f6',
      },
    ],
  },
  philosophy: {
    title: 'Philosophy & values',
    lead: 'Code should serve people — fast, honest, and without unnecessary noise',
    paragraphs: [
      'I build interfaces as if people will use them every day: clear, predictable, and free of theatrics. A polished UI means little if the page lags or the logic falls apart on the first real scenario.',
      'Flexibility beats dogma. Stack, patterns, and architecture are tools for the job — not a showcase. I keep what ships the product faster and is easier to maintain; I drop what only adds complexity.',
      'I value clean boundaries, clear contracts, and respect for the team’s time. Good frontend is not “another screen” — it is quiet confidence that everything is in place, explains itself, and can grow.',
    ],
    imageAlt: 'Illustration of development philosophy',
  },
  skillSet: {
    title: 'Skillset',
    description:
      'Strong frontend experience with libraries and frameworks. Ready to adapt to projects of any complexity and work well in a team.',
    skillList: [
      {
        name: 'JavaScript',
        icon: 'js',
        description:
          'I started with JavaScript basics — syntax, callbacks, and promises — then moved to closures, async patterns, and the DOM. Through practice and deeper ecosystem work, I learned to use JS effectively.',
      },
      {
        name: 'TypeScript',
        icon: 'ts',
        description:
          'After JavaScript, typing issues led me to TypeScript. With interfaces, generics, and utility types, I use TS to keep projects more predictable and maintainable.',
      },
      {
        name: 'React',
        icon: 'react',
        description:
          'I learned React as a practical way to build dynamic UIs and quickly embraced its declarative model. Hooks, context, and render optimization help me ship scalable apps.',
      },
      {
        name: 'Vue3',
        icon: 'vue',
        description:
          'After React I explored Vue with the Composition API. With reactivity, slots, and state management, I use Vue 3 for its ergonomics and capabilities.',
      },
      {
        name: 'Layout skills',
        icon: 'layout',
        description:
          'I learned layout through HTML and CSS — from simple pages to responsive, cross-browser UI. Preprocessors, Flexbox, Grid, and modern methods help me craft polished interfaces.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Live demos and case write-ups — open them and walk through the UI.',
    openCase: 'View case',
    openDemo: 'Open demo',
    statusOnline: 'Online',
  },
  contacts: {
    title: "Let's get started",
    description:
      "Now that we've gotten to know each other a little, write to me or send a message through the form.",
    form: {
      name: 'Name',
      email: 'Email',
      telegram: 'Telegram',
      message: 'Message',
      button: "Let's get started",
      sending: 'Sending...',
      placeholders: {
        name: 'Enter your name',
        email: 'Enter your email',
        telegram: '@your_telegram',
        message: 'Enter your message',
      },
    },
  },
  base_texts: {
    message_success: 'The message was sent successfully',
    message_error: {
      name: 'Name must be between 2 and 50 characters long.',
      email: 'Please enter a valid email address.',
      message: 'Message must be between 10 and 1000 characters long.',
      telegram: 'Telegram is optional; if provided, it must start with @',
      generic: 'Something went wrong while sending the message.',
      generic_retry: 'Something went wrong. Please try again later.',
    },
  },
  footer: {
    copyright: '© 2026 • Igor Edison.',
    tagline: 'Frontend developer',
    skills: 'React / Next.js / Vue / Nuxt',
    navLabel: 'Navigate',
    socialLabel: 'Connect',
  },
};

export default dictionary;

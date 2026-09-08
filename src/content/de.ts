import type { Dictionary } from '@/i18n/types';

const dictionary: Dictionary = {
  metadata: {
    title: 'Igor Edison — Frontend-Entwickler',
    description:
      'Portfolio des Frontend-Entwicklers Igor Edison: React, Next.js, TypeScript. Erfahrung, Skills und Kontakt.',
    keywords: 'frontend, entwickler, portfolio, react, nextjs, typescript, Igor Edison',
  },
  menu: {
    home: 'Start',
    experience: 'Erfahrung',
    skillset: 'Skills',
    contacts: 'Kontakt',
  },
  main: {
    name: 'Ich bin Igor Edison.',
    role: 'Webentwickler',
    location: 'aus Russland.',
    description1:
      'Einer der engagiertesten Webentwickler, mit denen Sie je gearbeitet haben.',
    description2:
      'Wenn Sie ein starkes Projekt und professionelle Skills brauchen — ich bin Ihr Mann.',
    photoAlt: 'Porträt von Igor Edison',
  },
  experience: {
    title: 'berufserfahrung',
    subtitle: 'Unternehmen, mit denen ich gearbeitet habe',
    data: [
      {
        roleInCompany: 'Middle+ Frontend Developer',
        companyName: 'Kiwitaxi',
        shortDescriptionWork:
          'Unser Team hat die Website des Unternehmens neu gebrandet. Ich habe UI-Kit und Startseite entwickelt.',
        counter: '01',
        companyColor: '#fdba74',
      },
      {
        roleInCompany: 'Expert Developer',
        companyName: 'Sciener',
        shortDescriptionWork:
          'Projekt RusAgro: Migration der App von SAPUI5 zu Vue.js für bessere Performance.',
        counter: '02',
        companyColor: '#ef4444',
      },
      {
        roleInCompany: 'Frontend Developer',
        companyName: 'Molga',
        shortDescriptionWork:
          'Support und Umsetzung von SAPUI5-Projekten für Norilsk Nickel, Severstal und M.Video (HR-Modul).',
        counter: '03',
        companyColor: '#3b82f6',
      },
    ],
  },
  philosophy: {
    title: 'Philosophie & Werte',
    lead: 'Code soll Menschen dienen — schnell, ehrlich und ohne unnötigen Lärm',
    paragraphs: [
      'Ich baue Interfaces so, als würden sie täglich genutzt: klar, vorhersehbar und ohne Theater. Ein schickes UI zählt wenig, wenn die Seite hängt oder die Logik am ersten echten Szenario zerbricht.',
      'Flexibilität schlägt Dogma. Stack, Patterns und Architektur sind Werkzeuge für die Aufgabe — keine Vitrine. Was das Produkt schneller macht und leichter wartbar hält, bleibt; was nur Komplexität erzeugt, fällt weg.',
      'Mir sind klare Grenzen, verständliche Verträge und Respekt für die Zeit des Teams wichtig. Gutes Frontend ist kein „weiterer Screen“ — sondern ruhige Sicherheit: alles sitzt, erklärt sich und lässt sich weiterentwickeln.',
    ],
    imageAlt: 'Illustration der Entwicklungsphilosophie',
  },
  skillSet: {
    title: 'Skills',
    description:
      'Viel Erfahrung im Frontend mit Bibliotheken und Frameworks. Ich passe mich Projekten jeder Komplexität an und arbeite gut im Team.',
    skillList: [
      {
        name: 'JavaScript',
        icon: 'js',
        description:
          'Zuerst die Basics von JavaScript — Syntax, Callbacks und Promises — dann Closures, Asynchronität und DOM. Durch Praxis und Vertiefung in das Ökosystem nutze ich JS effektiv.',
      },
      {
        name: 'TypeScript',
        icon: 'ts',
        description:
          'Nach JavaScript führten Typing-Probleme zu TypeScript. Mit Interfaces, Generics und Utility Types halte ich Projekte vorhersehbarer und wartbarer.',
      },
      {
        name: 'React',
        icon: 'react',
        description:
          'React habe ich als praktischen Weg zu dynamischen UIs gelernt und den deklarativen Ansatz schnell geschätzt. Hooks, Context und Render-Optimierung helfen bei skalierbaren Apps.',
      },
      {
        name: 'Vue3',
        icon: 'vue',
        description:
          'Nach React habe ich Vue mit der Composition API erkundet. Mit Reaktivität, Slots und State Management nutze ich Vue 3 wegen Syntax und Möglichkeiten.',
      },
      {
        name: 'Layout',
        icon: 'layout',
        description:
          'Layout habe ich mit HTML und CSS gelernt — von einfachen Seiten bis zu responsivem, cross-browser UI. Preprocessor, Flexbox, Grid und moderne Methoden helfen bei klaren Interfaces.',
      },
    ],
  },
  contacts: {
    title: 'Legen wir los',
    description:
      'Wir kennen uns ein wenig — schreiben Sie mir oder senden Sie eine Nachricht über das Formular.',
    form: {
      name: 'Name',
      email: 'E-Mail',
      telegram: 'Telegram',
      message: 'Nachricht',
      button: 'Absenden',
      sending: 'Wird gesendet...',
      placeholders: {
        name: 'Namen eingeben',
        email: 'E-Mail eingeben',
        telegram: '@your_telegram',
        message: 'Nachricht eingeben',
      },
    },
  },
  base_texts: {
    message_success: 'Nachricht erfolgreich gesendet',
    message_error: {
      name: 'Der Name muss zwischen 2 und 50 Zeichen lang sein.',
      email: 'Bitte eine gültige E-Mail-Adresse eingeben.',
      message: 'Die Nachricht muss zwischen 10 und 1000 Zeichen lang sein.',
      telegram: 'Telegram ist optional; falls angegeben, mit @ beginnen',
      generic: 'Beim Senden der Nachricht ist ein Fehler aufgetreten.',
      generic_retry: 'Fehler beim Senden. Bitte später erneut versuchen.',
    },
  },
  footer: {
    copyright: '© 2026 • Igor Edison.',
    tagline: 'Frontend-Entwickler',
    skills: 'React / Next.js / Vue / Nuxt',
    navLabel: 'Navigation',
    socialLabel: 'Kontakt',
  },
};

export default dictionary;

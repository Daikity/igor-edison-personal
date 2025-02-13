import { ExperienceData, Skills, Translations } from '@/app/types';

const philosophy: Translations = {
  en: `
      <h3 style="color: var(--color-level-1);">Philosophy & values</h3>
      <p style="color: var(--color-dark-grey)">
        JavaScript: The Path to Flexibility and Mastery
      </p>

      <p style="color: var(--color-dark-grey)">
        JavaScript is a language that values dynamism and adaptability.
        It is designed to solve problems quickly, flexibly, and efficiently,
        without restricting the developer with rigid frameworks. At its core is the
        ability to change on the fly, where every fragment of code can be reworked,
        adapted, and improved.
      </p>

      <p style="color: var(--color-dark-grey)">
        Its strength lies in simplicity and power. JS allows you to work with both the
        client and the server, using asynchronous processes and events to create dynamic,
        high-performance applications. There is nothing superfluous — each element serves its
        purpose, and all parts of the system can work in sync.
      </p>

      <p style="color: var(--color-dark-grey)">
        JavaScript is a language of possibilities, where every decision, big or small,
        leads to significant changes. This language teaches us to find balance between
        simplicity and power, enabling the creation of both small and large-scale projects.
      </p>
  `,
  ru: `
    <h3 style="color: var(--color-level-1);"> Философия и ценности </h3>
    <p style="color: var(--color-dark-grey)">
      JavaScript: путь к гибкости и мастерству
    </p>

    <p style="color: var(--color-dark-grey)">
      JavaScript — это язык, который ценит динамичность и адаптивность. Он создан для
      того, чтобы решать задачи быстро, гибко и эффективно, не ограничивая
      разработчика строгими рамками. В его основе — возможность изменения
      на лету, где каждый фрагмент кода может быть переработан, адаптирован и улучшен.
    </p>

    <p style="color: var(--color-dark-grey)">
      Его сила в простоте и мощи. JS позволяет работать как с клиентом,
      так и с сервером, используя асинхронные процессы и события для создания
      динамичных, высокоэффективных приложений. В нём нет ничего лишнего —
      каждый элемент имеет своё предназначение, и все части системы могут работать
      в синхронности.
    </p>

    <p style="color: var(--color-dark-grey)">
      JavaScript — это язык возможностей, где каждое решение, маленькое или
      большое, приводит к значительным изменениям. Этот язык учит искать баланс
      между простотой и мощью, позволяя создавать как мелкие, так и масштабные проекты.
    </p>
  `
}

const skillSet: Translations = {
  ru: `В области фронтенд-разработчика у меня большой опыт,
      а также опыт работы с разными библиотеками и
      фреймворками. Я готов адаптироваться и внедряться в
      любой проект разной сложности и отлично работаю в команде.`,

  en: `I have a lot of experience in the field of frontend developer,
      as well as experience working with various libraries and frameworks.
      I am ready to adapt and integrate into any project of varying complexity,
      and I work well as a team member.`
}

const jsDescription: Translations = {
  en: `First, I mastered the basics of JavaScript, understanding syntax,
      callbacks, and promises, and then moved on to more complex concepts such
      as closures, asynchrony, and working with the DOM. Over time, as I solved
      problems, created projects, and delved deeper into the ecosystem,
      I learned how to effectively use JS in development.`,

  ru: `Сначала я освоил основы JavaScript, разбираясь в синтаксисе,
      колбэках и промисах, а затем перешёл к более сложным концепциям,
      таким как замыкания, асинхронность и работа с DOM. Со временем,
      решая задачи, создавая проекты и углубляясь в экосистему,
      я научился эффективно использовать JS в разработке.`
}

const tsDescription: Translations = {
  en: `After mastering JavaScript, I ran into typing problems and started
    learning TypeScript to make the code more predictable and maintainable.
    Gradually, having dealt with interfaces, generics, and utility types,
    I began to actively apply TS in projects, improving their structure and quality.`,

  ru: `Освоив JavaScript, я столкнулся с проблемами типизации и начал
      изучать TypeScript, чтобы сделать код более предсказуемым и удобным
      в сопровождении. Постепенно разобравшись с интерфейсами, дженериками
      и утилитарными типами, я начал активно применять TS в проектах,
      улучшая их структуру и качество.`
}

const reactDescriptin: Translations = {
  en: `I started learning React when I was looking for a convenient
      way to create dynamic interfaces, and I immediately became
      imbued with its declarative approach. By understanding hooks, context,
      and rendering optimization, I've learned how to build scalable
      applications, and now I'm actively using React in my projects.`,

  ru: `React я начал изучать, когда искал удобный способ создавать
      динамичные интерфейсы, и сразу проникся его декларативным подходом.
      Разбираясь с хуками, контекстом и оптимизацией рендеринга,
      я научился строить масштабируемые приложения и теперь активно
      использую React в своих проектах.`
}

const vueDescriptin: Translations = {
  en: `After working with React, I became interested in
      how Vue works, and I started exploring it with the Composition
      API. Having mastered reactivity, slots, and state management,
      I began using Vue 3 in projects using its convenient
      syntax and powerful features.`,

  ru: `После работы с React мне стало интересно, как устроен Vue,
      и я начал изучать его с Composition API. Освоив реактивность,
      слоты и управление состоянием, я стал применять Vue 3 в проектах,
      используя его удобный синтаксис и мощные возможности.`
}

const layoutDescriptin: Translations = {
  ru: `Верстку я освоил, экспериментируя с HTML и CSS,
      постепенно переходя от простых макетов к адаптивному и
      кроссбраузерному дизайну. Со временем я начал использовать
      препроцессоры, Flexbox, Grid и современные методологии,
      что позволило мне создавать сложные и стильные интерфейсы.`,

  en: `I mastered the layout by experimenting with HTML and CSS,
      gradually moving from simple layouts to adaptive and cross-browser
      design. Over time, I started using preprocessors, Flexbox,
      Grid, and modern methodologies, which allowed me to
      create complex and stylish interfaces.`
}

export const texts = {
  en: {
    experience: {
      title: 'work experience' as string,
      subtitle: "Companies I have worked for in the past" as string,
      philosophy: philosophy.en,
      skillSet: {
        title: 'Skillset',
        description: skillSet.en,
        skillList: [
          {
            name: 'JavaScript',
            icon: 'js',
            description: jsDescription.en
          },
          {
            name: 'TypeScript',
            icon: 'ts',
            description: tsDescription.en
          },
          {
            name: 'React',
            icon: 'react',
            description: reactDescriptin.en
          },
          {
            name: 'Vue3',
            icon: 'vue',
            description: vueDescriptin.en
          },
          {
            name: 'Layout skills',
            icon: 'layout',
            description: layoutDescriptin.en
          }
        ] as Skills[]
      },
      data: [
        {
          roleInCompany: "Middle+ Frontend Developer",
          companyName: "Kiwitaxi",
          shortDescriptionWork: "Our team has been rebranding the company's website. My role was to develop uikit and the homepage.",
          counter: "01",
          companyColor: "#fdba74",
        },
        {
          roleInCompany: "Expert Developer",
          companyName: "Sciener",
          shortDescriptionWork: "My project was RusAgro. I migrated the app from SAPUI5 to VUE.js in order to provide greater performance.",
          counter: "02",
          companyColor: "#ef4444",
        },
        {
          roleInCompany: "Frontend Developer",
          companyName: "Molga",
          shortDescriptionWork: "I was involved in the support and implementation of projects on SAPUI5. We worked for the companies Norilsk Nickel, Severstal, and MVideo on the HR module",
          counter: "03",
          companyColor: "#3b82f6",
        }
      ] as ExperienceData[]
    },
    main: {
      name: "I'm Igor Edison.",
      role: "A web-developer",
      location: "based in Russia.",
      description1: "I'm one of the most active web developers you have ever worked with.",
      description2: "If you have a great project that requires professional skills, then I'm your guy."
    },
    contacts: {
      title: "Let's get started",
      description: "Now that we've gotten to know each other a little bit, write to me or send a message through the form.",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        button: "Let's get start"
      },
    },
    footer: {
      copyright: "© 2024 • Igor Edison."
    },
    metadata: {
      title: "Igor Edison",
      description: "Personal page about me"
    }
  }
}

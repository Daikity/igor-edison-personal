export interface ExperienceData {
  roleInCompany: string;
  companyName: string;
  companyColor?: string;
  shortDescriptionWork: string;
  counter: string;
}

export interface Skills {
  name: string
  icon: string
  description: string
}

export interface Translations {
  en: string
  ru: string
}

export interface FormData {
  name: string
  email: string
  message: string
}

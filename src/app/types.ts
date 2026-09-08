export interface ExperienceData {
  roleInCompany: string;
  companyName: string;
  companyColor?: string;
  shortDescriptionWork: string;
  counter: string;
}

export interface Skills {
  name: string;
  icon: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  telegram: string;
  message: string;
}

export type ButtonProps = {
  text?: string;
  iconLeft?: string;
  iconRight?: string;
  color?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

export type ValidateFields = {
  isValid: boolean;
  message: string;
  field: string;
  code: number;
};

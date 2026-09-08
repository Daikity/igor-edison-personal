import './scss/logo-text.scss';

type LogoTextProps = {
  size: 'l' | 'm';
};

/** Бренд в шапке/футере — не h1 (h1 только в hero) */
export default function LogoText({ size }: LogoTextProps) {
  return <span className={`logo-txt ${size}`}>Igor.E</span>;
}

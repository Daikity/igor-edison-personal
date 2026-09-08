import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/get-dictionary';
import { isLocale, type Locale } from '@/i18n/config';
import { listWorkCases } from '@/content/work';
import Main from '@/sections/main';
import Experience from '@/sections/experience';
import Philosophy from '@/sections/philosophy';
import Projects from '@/sections/projects';
import SkillSet from '@/sections/skillSet';
import Contacts from '@/sections/contacts';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const cases = listWorkCases(locale);

  return (
    <>
      <div className="home">
        <Main content={dict.main} />
      </div>
      <Experience content={dict.experience} />
      <Philosophy content={dict.philosophy} />
      <Projects locale={locale} labels={dict.projects} cases={cases} />
      <SkillSet content={dict.skillSet} />
      <Contacts content={dict.contacts} messages={dict.base_texts} />
    </>
  );
}

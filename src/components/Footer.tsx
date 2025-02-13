'use client'

import './scss/footer.scss';
import LogoText from "./LogoText";
import { texts } from '@/app/i18n';
import Icon from './Icon';

export default function Footer() {
  const { footer } = texts.en;

  return (
    <footer>
      <div className="flex flex-col gap-4 footer__container">
        <div className="flex w-full justify-between">
          <LogoText size='l' />
          <div className="flex gap-2 items-start pt-1">
            <a href="https://t.me/Edison_io">
              <Icon name='telegram' isImage={true} />
            </a>
            <a href="https://wa.link/kdt44t">
              <Icon name='whatsapp' isImage={true} />
            </a>
            <a href="https://belgorod.hh.ru/resume/417fe843ff03b496d40039ed1f66325137594d">
              <Icon name='hh' isImage={true} />
            </a>
            <a href="https://github.com/Daikity">
              <Icon name='github' isImage={true} />
            </a>
          </div>
        </div>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}

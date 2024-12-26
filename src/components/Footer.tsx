import './scss/footer.scss';
import LogoText from "./LogoText";
import Image from 'next/image';
import TelegramImg from '@/assets/icons/telegram.svg'
import WhatsAppImg from '@/assets/icons/whatsapp.svg'
import GitHubImg from '@/assets/icons/github.svg'
import HHImg from '@/assets/icons/hh.svg'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col h-full footer__container">
        <div className="flex flex-col w-1/2 justify-between min-h-96">
          <div className="flex flex-col">
            <LogoText size='l' />
            <div className="flex gap-2 items-center">
              <a href="https://t.me/Edison_io"><Image src={TelegramImg} width={32} height={32} alt='@Edison_io' /></a>
              <a href="https://wa.link/kdt44t"><Image src={WhatsAppImg} width={32} height={32} alt='Igor Edison' /></a>
              <a href="https://belgorod.hh.ru/resume/417fe843ff03b496d40039ed1f66325137594d"><Image src={HHImg} width={32} height={32} alt='Igor Edison' /></a>
              <a href="https://github.com/Daikity"><Image src={GitHubImg} width={32} height={32} alt='Daikity' /></a>
            </div>
          </div>
          <p>© 2024 • Igor Edison.</p>
        </div>
      </div>
    </footer>
  )
}

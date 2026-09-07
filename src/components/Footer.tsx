import { Mail, Phone, UserRound } from 'lucide-react'

export function Footer({ label = 'Global Invention & Innovation Connect 2026' }: { label?: string }) {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-contact">
        <div className="footer-kicker">ENQUIRIES – IFIA BHARAT</div>
        <div className="contact-line"><UserRound size={14}/><span>Anand Kannan</span></div>
        <div className="contact-line"><UserRound size={14}/><span>National Director, IFIA Bharat</span></div>
        <div className="contact-line"><Mail size={14}/><a href="mailto:anand@ifiabharat.com">anand@ifiabharat.com</a></div>
        <div className="contact-line"><Phone size={14}/><a href="tel:+919611128772">+91 96111 28772</a></div>
      </div>
      <div className="footer-logos">
        <img className="footer-bts" src="/assets/logos/btslogo-transparent.png" alt="Bengaluru Tech Summit" />
        <img className="footer-gok" src="/assets/logos/GoK-transparent.png" alt="Government of Karnataka" />
        <img className="footer-kdem" src="/assets/logos/KDEM-transparent.png" alt="KDEM" />
        <img className="footer-startup" src="/assets/logos/Startup Karnataka.png" alt="Startup Karnataka" />
        <img className="footer-ifia" src="/assets/logos/ifia-bharat-horizontal.png" alt="IFIA Bharat" />
      </div>
    </div>
    <div className="footer-bottom">© 2026 BTS × IFIA Bharat <span>|</span> {label}</div>
  </footer>
}

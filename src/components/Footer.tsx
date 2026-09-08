export function Footer({ label = 'Global Invention & Innovation Connect 2026' }: { label?: string }) {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-contact">
        <div className="footer-kicker">PROGRAMME ENQUIRIES</div>
        <div className="contact-line">IFIA Bharat — Powered by Yenilik Foundation</div>
        <div className="contact-line">Anand Kannan</div>
        <div className="contact-line">National Director, IFIA Bharat</div>
        <div className="contact-line"><a href="mailto:anand@ifiabharat.com">anand@ifiabharat.com</a><span className="contact-sep">|</span><a href="tel:+919611128772">+91 9611128772</a></div>
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

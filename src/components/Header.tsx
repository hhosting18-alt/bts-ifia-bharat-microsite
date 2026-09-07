import { Link, useLocation } from 'react-router-dom'

const items = [
  { label: 'HOME', path: '/' },
  { label: 'CHALLENGE', path: '/challenge' },
  { label: 'EXHIBITION', path: '/exhibition' },
  { label: 'AWARDS', path: '/awards' },
]

const brands = [
  { cls: 'brand-bts', src: '/assets/logos/btslogo.png', alt: 'Bengaluru Tech Summit 2026' },
  { cls: 'brand-gok', src: '/assets/logos/GoK.png', alt: 'Government of Karnataka' },
  { cls: 'brand-kdem', src: '/assets/logos/KDEM-_-Logo.png', alt: 'Karnataka Digital Economy Mission' },
  { cls: 'brand-startup', src: '/assets/logos/Startup Karnataka.png', alt: 'Startup Karnataka' },
  { cls: 'brand-ifia', src: '/assets/logos/ifia-bharat-horizontal.png', alt: 'IFIA Bharat' },
]

export function Header() {
  const { pathname } = useLocation()
  return (
    <>
      <header className="brand-header">
        <div className="brand-row">
          {brands.map((brand, index) => (
            <div className={`brand-slot ${brand.cls}`} key={brand.src}>
              <img src={brand.src} alt={brand.alt} />
              {index < brands.length - 1 && <span className="brand-divider" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </header>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          {items.map(item => (
            <Link
              key={item.path}
              className={pathname === item.path ? 'active' : ''}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/revista', label: 'Revistas' },
    { href: '/revista/acerca', label: 'Acerca' },
    { href: '/revista/archivo', label: 'Archivo' },
    { href: '/revista/instrucciones', label: 'Instrucciones' },
    { href: '/revista/politicas', label: 'Políticas' },
    { href: '/revista/comite', label: 'Comité' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          OJS
        </Link>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


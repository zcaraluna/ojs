import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'OJS - Sistema de Revistas Académicas',
  description: 'Plataforma para la gestión y publicación de revistas científicas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

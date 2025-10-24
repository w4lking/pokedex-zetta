import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import './globals.css'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex Zetta',
  description: 'Desafio técnico ZettaLab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="pageContainer">
          <NavBar />
          <main className="mainContent">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
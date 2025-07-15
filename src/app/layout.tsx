import type { Metadata } from 'next';
import '@app/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'EYEFIND',
  description: 'From the world of GTA V. Cloned and developed by Ludoria: https://ludoria.app',
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

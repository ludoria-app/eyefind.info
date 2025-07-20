// Libs
import type { Metadata } from 'next';

// App
import { ClientProviders } from '@app/app/client-providers';

// Styles
import '@app/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'Eyefind',
  // prettier-ignore
  description: 'It\'s like a series of tubes. From the world of GTA V. Cloned and developed by Ludoria: https://ludoria.app',
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

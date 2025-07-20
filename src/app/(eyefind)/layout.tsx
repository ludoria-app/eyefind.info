import { Footer, Header } from '@app/features/eyefind.info/components';

export default function EyefindLayout({ children }: Children) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

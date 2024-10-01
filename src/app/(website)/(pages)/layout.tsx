import MobileButton from '@/components/custom/MobileButton';
import Footer from '@/components/Modules/Footer';
import Header from '@/components/Modules/Header';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MobileButton />
      {children}
      <Footer />
    </>
  );
}

import { useSelector } from '@store/configureStore';
import Footer from './common/Footer';
import Header from './common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isDark = useSelector((state) => state.common.isDarkMode);

  return (
    <>
      <div
        className={`relative pb-40 w-full min-h-full select-none ${
          isDark && 'dark'
        }`}
      >
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

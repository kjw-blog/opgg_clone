import { useSelector } from '@store/configureStore';
import Header from './common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isDark = useSelector((state) => state.common.isDarkMode);

  return (
    <>
      <div className={`w-full h-full select-none ${isDark && 'dark'}`}>
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

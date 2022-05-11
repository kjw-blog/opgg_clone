import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
  closePortal: () => void;
}

export default function ModalPortal({
  children,
  closePortal,
}: ModalPortalProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (document) {
      const dom = document.querySelector('#root-modal');
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
        <div
          className="bg-opacity-60 backdrop-blur-sm fixed z-40 w-full h-screen bg-gray-300"
          onClick={closePortal}
        />
        <div className="max-h-[30rem] relative z-50 w-full h-full max-w-sm bg-white rounded-lg p-2 shadow-lg">
          {children}
        </div>
      </div>,
      ref.current
    );
  } else {
    return <></>;
  }
}

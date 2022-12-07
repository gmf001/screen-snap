import type { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className='my-24 h-1/2 min-h-[650px] w-full max-w-5xl border-4 border-gray-900 bg-white'>
      {children}
    </main>
  );
}

export default MainLayout;

import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface Props {
  colorMode: 'light' | 'dark';
  padding: number;
}

function BrowserWindow({
  children,
  colorMode,
  padding
}: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(
        'absolute overflow-hidden rounded-lg border-2',
        colorMode === 'light' && 'border-gray-200',
        colorMode === 'dark' && 'border-gray-900',
        padding === 0 && '!rounded-none !border-none'
      )}
      style={{
        left: padding,
        right: padding,
        top: padding,
        bottom: padding
      }}
    >
      <div
        className={clsx(
          'flex h-11 w-full items-center justify-start space-x-1.5 px-3',
          colorMode === 'light' && 'bg-gray-200',
          colorMode === 'dark' && 'bg-gray-900'
        )}
      >
        <span className='h-3 w-3 rounded-full bg-red-400'></span>
        <span className='h-3 w-3 rounded-full bg-yellow-400'></span>
        <span className='h-3 w-3 rounded-full bg-green-400'></span>
      </div>
      <div
        className={clsx(
          'absolute h-full w-full overflow-hidden border-t-0',
          colorMode === 'light' && 'bg-gray-100',
          colorMode === 'dark' && 'bg-gray-700'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default BrowserWindow;

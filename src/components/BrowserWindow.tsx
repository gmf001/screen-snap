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
        'absolute flex flex-col overflow-hidden rounded rounded-b-sm border-[5px]',
        colorMode === 'light' && 'border-gray-200 bg-gray-200',
        colorMode === 'dark' && 'border-gray-900 bg-gray-900',
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
          'flex h-6 w-full items-center justify-start space-x-1.5 px-2',
          colorMode === 'light' && 'bg-gray-200',
          colorMode === 'dark' && 'bg-gray-900'
        )}
      >
        <span className='h-2.5 w-2.5 rounded-full bg-red-400'></span>
        <span className='h-2.5 w-2.5 rounded-full bg-yellow-400'></span>
        <span className='h-2.5 w-2.5 rounded-full bg-green-400'></span>
      </div>
      <div
        id='here'
        className={clsx(
          'relative mt-1 w-full flex-grow overflow-hidden rounded border-t-0',
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

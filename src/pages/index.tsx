import BrowserWindow from '@/components/BrowserWindow';
import MainLayout from '@/components/MainLayout';
import Navbar from '@/components/Navbar';
import downloadScreenshot from '@/utils/downloadScreenshot';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';

function Home() {
  const [file, setFile] = useState<string>();
  const [padding, setPadding] = useState(40);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const window = useRef<HTMLDivElement>(null);

  const download = async () => {
    if (window.current) {
      await downloadScreenshot(window.current);
    }
  };

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  };

  return (
    <div className='grid min-h-screen place-items-center'>
      <Navbar setFile={setFile} />

      <MainLayout>
        <div
          ref={window}
          className='flex-center relative h-full w-full bg-white'
        >
          <BrowserWindow colorMode={colorMode} padding={padding}>
            {file ? (
              <img
                src={file}
                alt='placeholder'
                className='object-scale-up min-h-full w-full object-top'
              />
            ) : null}
          </BrowserWindow>
        </div>
      </MainLayout>

      <div className='fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center border-t-2 border-gray-900 bg-purple-accent py-2'>
        <div className='container flex w-full max-w-screen-lg items-center justify-between'>
          <div className='mb-2 flex w-full max-w-lg flex-col space-y-0'>
            <label
              htmlFor='default-range'
              className='mb-2 block text-lg font-bold text-gray-900'
            >
              Padding
            </label>
            <input
              onChange={(e) => setPadding(Number(e.currentTarget.value))}
              id='default-range'
              type='range'
              value={padding}
              min={0}
              max={60}
              step={1}
              className='h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-900 accent-yellow-100'
            />
          </div>
          <button
            onClick={toggleColorMode}
            className='rounded-lg border-2 border-gray-900 px-5 py-2.5 text-gray-900'
          >
            {colorMode === 'dark' ? (
              <SunIcon className='h-5 w-5' />
            ) : (
              <MoonIcon className='h-5 w-5' />
            )}
          </button>
          <button
            onClick={download}
            className='w-full max-w-xs border-4 border-black bg-green-200 p-2.5 text-xl font-extrabold text-gray-900 shadow-offset-black hover:bg-green-300'
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

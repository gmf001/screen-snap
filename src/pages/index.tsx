import BrowserWindow from '@/components/BrowserWindow';
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

      <main className='container my-24 h-1/2 min-h-[650px] w-full max-w-5xl'>
        <div
          ref={window}
          className='relative grid h-full w-full place-items-center border border-gray-800 bg-dark-accent'
        >
          <BrowserWindow colorMode={colorMode} padding={padding}>
            {file ? (
              <img
                src={file}
                alt='placeholder'
                className='object-fit h-full w-full overflow-hidden'
              />
            ) : null}
          </BrowserWindow>
        </div>
      </main>

      <div className='fixed bottom-10 left-0 right-0 z-50 mx-auto flex w-full max-w-lg items-center justify-center overflow-hidden rounded-xl bg-primary py-2'>
        <div className='container flex items-center justify-between space-x-4'>
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
              min={1}
              max={60}
              step={1}
              className='h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-900 accent-yellow-100'
            />
          </div>
          <button
            onClick={toggleColorMode}
            className='rounded-lg border border-dark px-5 py-2.5 text-dark'
          >
            {colorMode === 'dark' ? (
              <SunIcon className='h-5 w-5' />
            ) : (
              <MoonIcon className='h-5 w-5' />
            )}
          </button>
          <button
            onClick={download}
            className='rounded bg-green-200 py-2.5 px-6 text-sm font-bold text-gray-900 hover:bg-green-300'
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

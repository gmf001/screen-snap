import takeScreenshot from '@/utils/takeScreenshot';
import React, { useState } from 'react';

type Props = {
  setFile: (input?: string) => void;
};

function ScreenshotForm({ setFile }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;

    try {
      setFile(undefined);
      setIsLoading(true);
      const site = new URL(url);
      const file = await takeScreenshot({ url: site });
      setFile(file);
      setUrl('');
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      setFile(undefined);
      setUrl('');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative h-full w-full max-w-lg'>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={isLoading}
        type='text'
        placeholder='Enter Website URL'
        className='h-12 w-full rounded-lg border border-gray-700 bg-dark-accent py-1 px-4 text-sm font-semibold text-white placeholder:text-white focus:outline-none focus:ring-0'
      />
      <button
        type='submit'
        className='absolute top-1/2 right-2 m-0 mt-0 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary p-5 text-[11px] hover:bg-primary-accent'
      >
        <span>GO</span>
      </button>
    </form>
  );
}

export default ScreenshotForm;

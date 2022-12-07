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
    <form onSubmit={handleSubmit} className='w-full max-w-lg space-y-4'>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={isLoading}
        type='text'
        placeholder='Enter Website URL'
        className='w-full rounded-lg border-2 border-black bg-white py-2.5 px-4 text-lg font-semibold text-black placeholder:text-black focus:outline-none focus:ring-0'
      />
    </form>
  );
}

export default ScreenshotForm;

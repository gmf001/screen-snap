import takeScreenshot from '@/utils/takeScreenshot';
import React, { useState } from 'react';

function ScreenshotForm() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;

    try {
      setFile(undefined);
      setLoading(true);
      const site = new URL(url);
      const file = await takeScreenshot({ url: site });
      setFile(file);
      setUrl('');
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      setFile(undefined);
      setUrl('');
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col space-y-4 py-10'
      >
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type='text'
          placeholder='https://your-website.com'
          className='rounded-sm bg-white py-3 px-4 text-sm text-gray-900 focus:outline-none focus:ring-0'
        />
        <button
          type='submit'
          className='rounded-sm bg-primary px-8 py-3.5 text-sm font-bold uppercase hover:bg-primary-accent'
        >
          {loading ? 'taking screenshot...' : 'Take Screenshot'}
        </button>
      </form>

      <div className='relative grid w-full overflow-hidden rounded-sm'>
        {file ? <img src={file} alt='placeholder' /> : null}
      </div>
    </>
  );
}

export default ScreenshotForm;

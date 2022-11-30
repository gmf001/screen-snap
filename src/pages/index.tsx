import ScreenshotForm from '@/components/ScreenshotForm';

function Home() {
  return (
    <div className='my-20 flex max-h-fit w-full max-w-xl flex-col p-10'>
      <div className='flex h-full w-full flex-1 flex-col'>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-extrabold'>ScreenSnap</h2>
          <p className='text-sm font-bold uppercase text-gray-400'>
            Generate awesome screenshots
          </p>
        </div>
        <ScreenshotForm />
      </div>
    </div>
  );
}

export default Home;
